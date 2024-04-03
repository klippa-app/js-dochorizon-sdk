import {
  DocHorizonDocument,
  DocHorizonRequestData,
} from "../../../Types/UserOptionsTypes";
import { DocHorizonResponse, Endpoint } from "../../../Types/ApiTypes";
import { parseDocHorizonDocumentsList } from "../../DocHorizonDocumentFunctions";
import { JSONBodyBuilder } from "../../../JSONBodyBuilder";
import { APIFunctionalities } from "../../APIFunctions";
import { GenericXlsxOptions } from "./Generic.types";
import { AsyncOptions, AsyncStatus } from "../Async.types";
import { AsyncService } from "../Async.service";
import { AdditionalBodyData } from "../../../Types/AdditionalBodyData";

export namespace GenericService {
  const baseUrl = "/api/services/document_capturing/v1/generic";

  const routeMapping = {
    capture: baseUrl,
    captureAsyncOrGetJobList: `${baseUrl}/async`,
    asyncStatusOrRemove: `${baseUrl}/async/{job_id}`,
    asyncLogs: `${baseUrl}/async/{job_id}/logs`,
    asyncResults: `${baseUrl}/async/{job_id}/result`,
    captureXlsx: `${baseUrl}/xlsx`,
  };

  //Capture data from a generic document
  export async function capture(
    src: string | string[] | DocHorizonDocument | DocHorizonDocument[],
  ): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = {
      url: routeMapping.capture,
      method: "POST",
    };

    const srcList = APIFunctionalities.transformList(src);
    const body = {
      documents: parseDocHorizonDocumentsList(srcList),
    };

    const JsonBody = JSONBodyBuilder.buildBody(endpoint, body);
    return await APIFunctionalities.request({ endpoint, body: JsonBody });
  }

  //Capture data from a generic document and get the results back as an XLSX
  export async function captureXlsx(
    src: string | string[] | DocHorizonDocument | DocHorizonDocument[],
    options?: GenericXlsxOptions,
  ): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = {
      url: routeMapping.captureXlsx,
      method: "POST",
    };
    const additionalBodyData: AdditionalBodyData = {};

    if (options?.output_target) {
      additionalBodyData.output_target = options.output_target;
    }

    const srcList = APIFunctionalities.transformList(src);
    const body: DocHorizonRequestData = {
      documents: parseDocHorizonDocumentsList(srcList),
      ...additionalBodyData,
    };

    const JsonBody = JSONBodyBuilder.buildBody(endpoint, body);
    return await APIFunctionalities.request({ endpoint, body: JsonBody });
  }

  //Capture data from a generic document asynchronously
  export async function captureAsync(
    src: string | string[] | DocHorizonDocument | DocHorizonDocument[],
    options?: Omit<AsyncOptions, "hitl">,
  ): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = {
      url: routeMapping.captureAsyncOrGetJobList,
      method: "POST",
    };

    let additionalBodyData: AdditionalBodyData = {};
    return AsyncService.parseAsync({
      src,
      endpoint,
      options,
      additionalBodyData,
    });
  }

  //Get the status of a generic async job
  export async function getAsyncStatus(
    job_id: string,
  ): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = {
      url: routeMapping.asyncStatusOrRemove,
      method: "GET",
    };
    return AsyncService.getOrDeleteAsyncRequest({
      endpoint,
      job_id,
    });
  }

  //Get all available generic async jobs
  export async function getAsyncJobs(): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = {
      url: routeMapping.captureAsyncOrGetJobList,
      method: "GET",
    };

    return AsyncService.getOrDeleteAsyncRequest({
      endpoint,
    });
  }

  //Get a list of available generic async jobs
  export async function getListOfJobIds(status?: AsyncStatus) {
    const res = await getAsyncJobs();
    return await AsyncService.getListOfJobIds(res, status);
  }

  //Remove a generic async job
  export async function removeAsyncJob(
    job_id: string,
  ): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = {
      url: routeMapping.asyncStatusOrRemove,
      method: "DELETE",
    };
    return AsyncService.getOrDeleteAsyncRequest({
      endpoint,
      job_id,
    });
  }

  //Get logs of a generic async job
  export async function getLogsOfAsyncJob(
    job_id: string,
  ): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = {
      url: routeMapping.asyncLogs,
      method: "GET",
    };
    return AsyncService.getOrDeleteAsyncRequest({
      endpoint,
      job_id,
    });
  }

  //Get results of a generic async job
  export async function getResultsOfAsyncJob(
    job_id: string,
  ): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = {
      url: routeMapping.asyncResults,
      method: "GET",
    };

    return AsyncService.getOrDeleteAsyncRequest({
      endpoint,
      job_id,
    });
  }
}
