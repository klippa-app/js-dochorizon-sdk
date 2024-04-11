import {
  DocHorizonDocument,
  DocHorizonRequestData,
} from "../../../Types/UserOptionsTypes";
import { DocHorizonResponse, Endpoint } from "../../../Types/ApiTypes";
import { parseDocHorizonDocumentsList } from "../../DocHorizonDocumentFunctions";
import { JSONBodyBuilder } from "../../../JSONBodyBuilder";
import { APIFunctionalities } from "../../APIFunctions";
import { AsyncOptions, AsyncStatus } from "../Async.types";
import { AsyncService } from "../Async.service";
import { ModelPromptBuilderConfigResult } from "./PromptBuilder.types";

/**
 * Prompt Builder Service
 *
 * Exposing multiple functions to execute using the prompt builder API
 */
export namespace PromptBuilderService {
  const baseUrl =
    "/api/services/document_capturing/v1/prompt_builder/configurations";

  const routeMapping = {
    capture: `${baseUrl}/{slug}`,
    captureAsyncOrGetJobList: `${baseUrl}/{slug}/async`,
    slugList: baseUrl,
    asyncGetStatusOrRemove: `${baseUrl}/{slug}/async/{job_id}`,
    asyncLogs: `${baseUrl}/{slug}/async/{job_id}/logs`,
    asyncResult: `${baseUrl}/{slug}/async/{job_id}/result`,
    schema: `${baseUrl}/{slug}/schema`,
  };
  
  /**
   * Capture a document using a prompt builder configuration
   * @param src - the document in the form of a DocHorizonDocument object, or a string
   * @see {@link DocHorizonDocument}
   * @param slug - the slug of the prompt builder configuration to use
   *
   * @returns DocHorizonResponse - A promise of type DocHorizonResponse
   * @see {@link DocHorizonResponse}
   */
  export async function capture(
    src: string | string[] | DocHorizonDocument | DocHorizonDocument[],
    slug: string,
  ): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = {
      url: routeMapping.capture,
      method: "POST",
    };

    const srcList = APIFunctionalities.transformList(src);
    const body: DocHorizonRequestData = {
      documents: parseDocHorizonDocumentsList(srcList),
    };

    const jsonBody = JSONBodyBuilder.buildBody(endpoint, body);
    return await APIFunctionalities.request({
      body: jsonBody,
      params: { PathParams: { slug } },
      endpoint,
    });
  }
  
  /**
   * Get the available prompt configurations for the used API key
   *
   * @returns Promise<DocHorizonResponse> - A promise of type DocHorizonResponse
   * @see {@link DocHorizonResponse}
   */
  export async function getConfigurations(): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = {
      url: routeMapping.slugList,
      method: "GET",
    };

    return await APIFunctionalities.request({ endpoint });
  }
  
  /**
   * Get the JSON schema of a prompt configuration
   *
   * @param slug - slug of the prompt configuration you wish to get the Json schema of
   * @returns Promise<DocHorizonResponse> - a promise of type DocHorizonResponse
   * @see {@link DocHorizonResponse}
   */
  export async function getJsonSchema(
    slug: string,
  ): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = {
      url: routeMapping.schema,
      method: "GET",
    };
    return await APIFunctionalities.request({
      endpoint,
      params: { PathParams: { slug } },
    });
  }
  
  /**
   * Capture data from a document using a prompt configuration - async
   *
   * @param src - the document to capture data from. Can be given in the form of a string or a
   * DocHorizonDocument. {@link DocHorizonDocument}. Multiple strings or DocHorizonDocument
   * types can be given in the form of an array.
   * @param slug - slug of the prompt configuration to use
   * @param options - Object of Asynchronous options
   * @see {@link AsyncOptions}
   *
   * @returns Promise<DocHorizonResponse> - a promise of type DocHorizonResponse
   * @see {@link DocHorizonResponse}
   */
  export async function captureAsync(
    src: string | string[] | DocHorizonDocument | DocHorizonDocument[],
    slug: string,
    options?: AsyncOptions,
  ): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = {
      url: routeMapping.captureAsyncOrGetJobList,
      method: "POST",
    };
    return AsyncService.parseAsync({
      src,
      endpoint,
      options,
      additionalBodyData: {},
      slug,
    });
  }
  
  /**
   * Get the status of a prompt builder async job
   * @param slug - slug of the prompt builder configuration to get status information on
   * @param job_id - id of the job to get status information on
   *
   * @returns a DocHorizonResponse containing found status information of the provided job id
   * @see {@link DocHorizonResponse}
   */
  export async function getAsyncStatus(
    slug: string,
    job_id: string,
  ): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = {
      url: routeMapping.asyncGetStatusOrRemove,
      method: "GET",
    };

    return AsyncService.getOrDeleteAsyncRequest({
      endpoint,
      job_id,
      slug,
    });
  }
  
  /**
   * Get all available prompt builder async jobs
   *
   * @param slug - the slug of a prompt builder configuration to get async jobs of
   *
   * @returns a DocHorizonResponse containing available prompt builder async jobs
   * @see {@link DocHorizonResponse}
   */
  export async function getAsyncJobs(
    slug: string,
  ): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = {
      url: routeMapping.captureAsyncOrGetJobList,
      method: "GET",
    };
    return AsyncService.getOrDeleteAsyncRequest({
      endpoint,
      slug,
    });
  }
  
  /**
   * Get all available prompt builder async jobs in the form of a list
   * @param slug - the slug of a prompt builder configuration to get async jobs of
   * @param status - optionally, provide a status to filter the results
   * @see {@link AsyncStatus}
   *
   * @returns a list of found job ids
   */
  export async function getListOfJobIds(slug: string, status?: AsyncStatus) {
    const res = await getAsyncJobs(slug);
    return await AsyncService.getListOfJobIds(res, status);
  }
  
  /**
   * Remove a prompt builder async job
   *
   * @param slug - the slug of a prompt builder configuration to remove the async job of
   * @param job_id - the id of a job to remove
   *
   * @returns a DocHorizonResponse containing information about the deletion
   * @see {@link DocHorizonResponse}
   */
  export async function removeAsyncJob(
    slug: string,
    job_id: string,
  ): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = {
      url: routeMapping.asyncGetStatusOrRemove,
      method: "DELETE",
    };
    return AsyncService.getOrDeleteAsyncRequest({
      endpoint,
      job_id,
      slug,
    });
  }
  
  /**
   * Get logs of a prompt builder async job
   * @param slug - the slug of a prompt builder configuration to remove the async job of
   * @param job_id - the id of a job to get logs of
   *
   * @returns a DocHorizonResponse containing any found logs
   * @see {@link DocHorizonResponse}
   */
  export async function getLogsOfAsyncJob(
    slug: string,
    job_id: string,
  ): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = {
      url: routeMapping.asyncLogs,
      method: "GET",
    };

    return AsyncService.getOrDeleteAsyncRequest({
      slug,
      endpoint,
      job_id,
    });
  }
  
  /**
   * Get results of a prompt builder async job
   * @param slug - the slug of the prompt builder configuration to get the results of
   * @param job_id - the id of a job to get results for
   *
   * @returns a DocHorizonResponse containing results from the prompt builder capturer
   * deletion
   * @see {@link DocHorizonResponse}
   */
  export async function getResultsOfAsyncJob(
    slug: string,
    job_id: string,
  ): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = {
      url: routeMapping.asyncResult,
      method: "GET",
    };
    return AsyncService.getOrDeleteAsyncRequest({
      endpoint,
      job_id,
    });
  }
  
  /**
   * Get a list of available prompt builder configurations
   *
   * @returns a list of prompt builder configuration strings
   */
  export async function getConfigurationsList(): Promise<string[]> {
    const result = await getConfigurations();
    const configurations: ModelPromptBuilderConfigResult[] =
      unpackModelOrPromptData(result);

    const configList: string[] = [];

    for (const configuration of configurations) {
      configList.push(configuration.slug);
    }

    return configList;
  }

  function unpackModelOrPromptData(
    result: DocHorizonResponse,
  ): ModelPromptBuilderConfigResult[] {
    const data = result.docHorizonData.data;

    const isModelOrPromptConfigResult = (
      result: any,
    ): result is ModelPromptBuilderConfigResult[] => {
      return result[0].slug !== undefined && result[0].name !== undefined;
    };

    if (isModelOrPromptConfigResult(data)) {
      return data;
    }
    return [];
  }
}
