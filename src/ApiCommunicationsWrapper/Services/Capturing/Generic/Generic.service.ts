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

/**
 * Generic Service
 *
 */
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
  
  /**
   * Capture data from a document using the 'generic model'
   *
   * @param src - either a string indicating a document, or a DocHorizonDocument
   * @see {@link DocHorizonDocument}
   *
   * @returns a DocHorizonResponse containing the results from the generic document capturer
   * @see {@link DocHorizonResponse}
   */
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
  
  /**
   * Capture data from a document using the 'generic model' and get results back as an XLSX sheet
   *
   * @param src - either a string indicating a document, or a DocHorizonDocument
   * @see {@link DocHorizonDocument}
   *
   * @param options - an object containing a field called 'output_target' which indicates
   * whether to output the results as a 'Base64' string, or a DocHorizonStorage id
   * @see {@link GenericXlsxOptions}
   *
   * @returns a DocHorizonResponse containing the results from the generic document capturer
   * @see {@link DocHorizonResponse}
   */
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
  
  /**
   * Capture data from a document using the 'generic model' asynchronously
   *
   * @param src - either a string indicating a document, or a DocHorizonDocument
   * @see {@link DocHorizonDocument}
   *
   * @param options - an object containing all asynchronous options, except for Hitl
   * @see {@link AsyncOptions}
   *
   * @returns a DocHorizonResponse containing the results from the async generic document capturer
   * @see {@link DocHorizonResponse}
   */
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
  
  /**
   * Get the status of a generic async job
   * @param job_id - The job id of which you want to get the status
   * @returns a DocHorizonResponse containing status information regarding the provided status
   * @see {@link DocHorizonResponse}
   */
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
  
  /**
   * Get all existing generic async jobs for the used API key
   *
   * @returns a DocHorizonResponse containing all found generic async jobs
   * @see {@link DocHorizonResponse}
   */
  export async function getAsyncJobs(): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = {
      url: routeMapping.captureAsyncOrGetJobList,
      method: "GET",
    };

    return AsyncService.getOrDeleteAsyncRequest({
      endpoint,
    });
  }
  
  /**
   * Get a list of all existing generic async jobs for the used API key
   *
   * @param status - an optional status to filter the results on
   * @see {@link AsyncStatus} for the available statusses
   * @returns a list containing all found generic async job ids
   * @see {@link DocHorizonResponse}
   */
  export async function getListOfJobIds(status?: AsyncStatus) {
    const res = await getAsyncJobs();
    return await AsyncService.getListOfJobIds(res, status);
  }
  
  /**
   * Remove a generic async job
   * @param job_id - the id of the job to delete
   * @returns a DocHorizonResponse containing information about the deletion
   * @see {@link DocHorizonResponse}
   */
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
  
  /**
   * Get logs of a generic async job
   * @param job_id - The job id of which you want to obtain logs
   * @returns DocHorizonResponse data containing found logs for the provided job id
   */
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
  
  /**
   * Get results of a generic async job
   * @param job_id - The id of the job which you want to get the results from
   * @returns a DocHorizonResponse containing results from the generic capturer
   * @see {@link DocHorizonResponse}
   */
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
