import { DocHorizonDocument } from "../../../src/ApiCommunicationsWrapper/Types/UserOptionsTypes";
import {
  parseDocHorizonDocument,
  parseDocHorizonDocumentsList,
} from "../../../src/ApiCommunicationsWrapper/Services/DocHorizonDocumentFunctions";
import fs from "fs";

describe("DocHorizonDocument functions tests", () => {
  const base64Data: string = "test/testFiles/testpdf.pdf";
  const base64String: string = fs.readFileSync(
    "test/testFiles/document.txt",
    "utf-8",
  );
  const docHorizonDocument: DocHorizonDocument = { data: base64Data };

  test("That a dochorizondocument is returned when providing a dochorizondocument", () => {
    const result = parseDocHorizonDocument(docHorizonDocument);
    expect(result.data).toBeDefined();
  });

  test("That a path string is turned into a DocHorizonDocument with data", () => {
    const result = parseDocHorizonDocument(base64Data);
    expect(result.data).toBeDefined();
  });

  test("That a path string is turned into a DocHorizonDocument with url", () => {
    const result = parseDocHorizonDocument("https://someurl.com/hello");
    expect(result.url).toBeDefined();
  });

  test("That a path string is turned into a DocHorizonDocument with url", () => {
    const result = parseDocHorizonDocument(
      "4f990095-a623-11ee-bcbc-02d158bb9375",
    );
    expect(result.file_id).toBeDefined();
  });

  test("That specified file could not be found will be thrown when incorrect path provided", () => {
    expect(() => parseDocHorizonDocument("/some/path/hi.pdf")).toThrow(
      /^DocHorizon Error: Supplied file could not be found!$/,
    );
  });

  test("That a dochorizondocument will be returned when providing a base64 string", () => {
    const result = parseDocHorizonDocument(base64String);
    expect(result.data).toBeDefined();
  });

  test("That list of docHorizondocuments is returned when providing multiple paths", () => {
    const result = parseDocHorizonDocumentsList([base64Data, base64Data]);
    expect(Array.isArray(result)).toBeTruthy();
    expect(result[0].data).toBeDefined();
    expect(result[1].data).toBeDefined();
  });
});
