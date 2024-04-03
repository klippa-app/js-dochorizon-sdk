import { DocHorizonResponse, Endpoint } from "../../Types/ApiTypes";
import { APIFunctionalities } from "../APIFunctions";
import {
  Document,
  Documents,
  ImageRenderOptions,
  MergeOptions,
  Output,
  RenderResult,
  RenderOptions,
  SplitOptions,
} from "./DocumentToolkit.types";
import {
  DocHorizonDocument,
  DocHorizonRequestData,
} from "../../Types/UserOptionsTypes";
import { JSONBodyBuilder } from "../../JSONBodyBuilder";
import {
  parseDocHorizonDocument,
  parseDocHorizonDocumentsList,
} from "../DocHorizonDocumentFunctions";
import { AdditionalBodyData } from "../../Types/AdditionalBodyData";
import { AsyncJobCreationResult } from "../Capturing/Async.types";

export namespace DocumentToolkitService {
  const routeMapping = {
    info: "/api/services/document_toolkit/v1/info",
    merge: "/api/services/document_toolkit/v1/merge",
    render: "/api/services/document_toolkit/v1/render",
    split: "/api/services/document_toolkit/v1/split",
  };

  //Obtain information about a provided document
  export async function info(
    src: string | DocHorizonDocument,
  ): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = { url: routeMapping.info, method: "POST" };
    const docHorizonDoc: DocHorizonDocument = parseDocHorizonDocument(src);
    const JsonBody = JSONBodyBuilder.buildBody(endpoint, {
      documents: docHorizonDoc,
    });

    return await APIFunctionalities.request({ body: JsonBody, endpoint });
  }

  //Merge multiple documents into one
  export async function merge(
    src: string[] | DocHorizonDocument[],
    options?: MergeOptions,
  ): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = { url: routeMapping.merge, method: "POST" };
    const additionalBodyData: AdditionalBodyData = {};

    if (options?.output_target) {
      additionalBodyData.output_target = options.output_target;
    }

    const body: DocHorizonRequestData = {
      documents: parseDocHorizonDocumentsList(src),
      ...additionalBodyData,
    };

    const JsonBody = JSONBodyBuilder.buildBody(endpoint, body);

    return await APIFunctionalities.request({ body: JsonBody, endpoint });
  }

  //Get file data or a file id of the result of a Merge operation
  export async function getMergedResults(
    res: DocHorizonResponse,
  ): Promise<string> {
    const result: Document | undefined = unpackDocumentResultData(res);
    if (result) {
      if (result.document.output.file_id) {
        return result.document.output.file_id;
      }
      return result.document.output.data;
    }

    return "";
  }

  //Split a file into multiple files
  export async function split(
    src: string | DocHorizonDocument,
    options?: SplitOptions,
  ): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = { url: routeMapping.split, method: "POST" };
    const additionalBodyData: AdditionalBodyData = {};

    if (options?.output_target) {
      additionalBodyData.output_target = options.output_target;
    }
    if (options?.page_ranges) {
      typeof options.page_ranges === "string"
        ? (additionalBodyData.page_ranges = [options.page_ranges])
        : (additionalBodyData.page_ranges = options.page_ranges);
    }

    const body: DocHorizonRequestData = {
      documents: parseDocHorizonDocument(src),
      ...additionalBodyData,
    };

    const jsonBody = JSONBodyBuilder.buildBody(endpoint, body);
    return await APIFunctionalities.request({ endpoint, body: jsonBody });
  }

  //Render a document as an image
  export async function render(
    src: string | DocHorizonDocument,
    options: RenderOptions,
  ): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = { url: routeMapping.render, method: "POST" };
    const additionalBodyData: AdditionalBodyData = {};

    if (options?.renders) {
      const renders: ImageRenderOptions[] = Array.isArray(options.renders)
        ? options.renders
        : [options.renders];

      renders.map((render) => {
        if (render.page_ranges) {
          render.page_ranges =
            typeof render.page_ranges === "string"
              ? [render.page_ranges]
              : render.page_ranges;
        }
      });

      additionalBodyData.renders = renders;
    }
    if (options?.output_target) {
      additionalBodyData.output_target = options.output_target;
    }

    const body: DocHorizonRequestData = {
      documents: parseDocHorizonDocument(src),
      ...additionalBodyData,
    };

    const jsonBody = JSONBodyBuilder.buildBody(endpoint, body);
    return await APIFunctionalities.request({ body: jsonBody, endpoint });
  }

  //Get image data of the result of a Render operation
  export async function getRenderedImage(
    res: DocHorizonResponse,
    index?: number,
  ): Promise<string> {
    const result: RenderResult | undefined = unpackRendersData(res);
    const imageIndex = index ?? 0;

    if (result) {
      const fileData: Output = result.renders[imageIndex].output;
      if (fileData.file_id) {
        return fileData.file_id;
      }
      return fileData.data;
    }

    return "";
  }

  //Get the file data or file ids of the results of a split operation
  export async function getSplitDocumentsList(
    res: DocHorizonResponse,
  ): Promise<string[]> {
    const result: Documents | undefined = unpackDocumentsResultData(res);
    const resultsList: string[] = [];

    if (result) {
      for (const splitResultEntry of result.documents) {
        const documentOutput: Output = splitResultEntry.output;
        if (documentOutput.file_id) {
          resultsList.push(documentOutput.file_id);
        } else {
          resultsList.push(documentOutput.data);
        }
      }
    }

    return resultsList;
  }

  function unpackDocumentsResultData(
    result: DocHorizonResponse,
  ): Documents | undefined {
    const data = result.docHorizonData.data;

    const isDocumentsResult = (result: any): result is Documents => {
      return (
        result.documents[0].output !== undefined &&
        result.documents[0].output.content_type !== undefined
      );
    };

    if (isDocumentsResult(data)) {
      return data;
    }
  }

  function unpackRendersData(
    result: DocHorizonResponse,
  ): RenderResult | undefined {
    const data = result.docHorizonData.data;

    const isRendersResult = (result: any): result is RenderResult => {
      return result.renders !== undefined;
    };

    if (isRendersResult(data)) {
      return data;
    }
  }

  function unpackDocumentResultData(
    result: DocHorizonResponse,
  ): Document | undefined {
    const data = result.docHorizonData.data;

    const isDocumentResult = (result: any): result is Document => {
      return (
        result.document.output !== undefined &&
        result.document.output.content_type !== undefined
      );
    };

    if (isDocumentResult(data)) {
      return data;
    }
  }
}
