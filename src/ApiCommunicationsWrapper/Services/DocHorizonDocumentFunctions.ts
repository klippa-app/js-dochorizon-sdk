import fs from "fs";
import { APIFunctionalities } from "./APIFunctions";
import {
  DocHorizonDocument,
  isDocHorizonDocument,
} from "../Types/UserOptionsTypes";
import fileToBase64 = APIFunctionalities.fileToBase64;

export function parseDocHorizonDocument(
  src: string | DocHorizonDocument,
): DocHorizonDocument {
  if (typeof src !== "string") {
    if (src.data) {
      src.data = APIFunctionalities.fileToBase64(src.data);
    }
    return src;
  }

  if (isBase64String(src)) {
    return { data: src };
  } else if (isDocHorizonStorage(src)) {
    return { file_id: src };
  } else if (isUrl(src)) {
    return { url: src };
  } else if (isFilePath(src)) {
    let data = fs.readFileSync(src, "utf-8");
    if (!isBase64String(data)) {
      data = fileToBase64(src);
    }
    return { data };
  } else {
    throw Error("DocHorizon Error: Supplied file could not be found!");
  }
}

export function parseDocHorizonDocumentsList(
  src: DocHorizonDocument[] | string[],
): DocHorizonDocument[] {
  const documents: DocHorizonDocument[] = [];

  src.forEach((document) => {
    if (isDocHorizonDocument(document) && document.data) {
      let base64 = fs.readFileSync(document.data, "utf-8");
      if (!isBase64String(base64)) {
        base64 = APIFunctionalities.fileToBase64(document.data);
      }
      documents.push({
        ...document,
        data: base64,
      });
    } else if (typeof document === "string") {
      documents.push(parseDocHorizonDocument(document));
    }
  });

  return documents;
}

function isDocHorizonStorage(src: string): boolean {
  //https://dev.to/melvin2016/how-to-check-if-a-string-is-a-valid-uuid-in-javascript-db7
  const regEx =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

  return regEx.test(src);
}

function isUrl(src: string): boolean {
  return src.includes("http");
}

function isFilePath(src: string): boolean {
  return fs.existsSync(src);
}

function isBase64String(src: string): boolean {
  //https://discuss.rapid7.com/t/easiest-way-to-detect-if-a-string-is-base64-encoded-or-not/22258
  const regEx =
    /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gi;
  return regEx.test(src);
}
