import {
  DocHorizonDocument,
  DocHorizonRequestData,
} from "../../../Types/UserOptionsTypes";
import {
  DocHorizonResponse,
  Endpoint,
  ParamData,
} from "../../../Types/ApiTypes";
import { parseDocHorizonDocumentsList } from "../../DocHorizonDocumentFunctions";
import { JSONBodyBuilder } from "../../../JSONBodyBuilder";
import { APIFunctionalities } from "../../APIFunctions";
import { AsyncOptions, AsyncStatus } from "../Async.types";
import { AsyncService } from "../Async.service";
import { ModelPromptBuilderConfigResult } from "../PromptBuilder/PromptBuilder.types";

/**
 * Model Builder Service
 *
 */
export namespace ModelBuilderService {
  const baseUrl = "/api/services/document_capturing/v1/model_builder/models";
  const routeMapping = {
    capture: `${baseUrl}/{slug}`,
    captureAsyncOrGetJobList: `${baseUrl}/{slug}/async`,
    slugList: baseUrl,
    asyncGetStatusOrRemove: `${baseUrl}/{slug}/async/{job_id}`,
    asyncLogs: `${baseUrl}/{slug}/async/{job_id}/logs`,
    asyncResult: `${baseUrl}/{slug}/async/{job_id}/result`,
    schema: `${baseUrl}/{slug}/schema`,
    versions: `${baseUrl}/{slug}/versions`,
  };
  
  /**
   * Capture data from a document using a model created with the DocHorizon Model Builder
   * @param src - either a string indicating a document, or a DocHorizonDocument
   * @see {@link DocHorizonDocument}
   * @param slug - the slug of the model configuration you want to use
   * @param version - the version of the model you want to use
   *
   * @returns a DocHorizonResponse containing the results from the financial document capturer
   * @see {@link DocHorizonResponse}
   */
  export async function capture(
    src: string | string[] | DocHorizonDocument | DocHorizonDocument[],
    slug: string,
    version?: number,
  ): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = {
      url: routeMapping.capture,
      method: "POST",
    };

    const srcList = APIFunctionalities.transformList(src);
    const body: DocHorizonRequestData = {
      documents: parseDocHorizonDocumentsList(srcList),
    };

    let params: ParamData = { PathParams: { slug } };
    if (version) {
      params.QueryParams = { version };
    }

    const jsonBody = JSONBodyBuilder.buildBody(endpoint, body);
    return await APIFunctionalities.request({
      body: jsonBody,
      params,
      endpoint,
    });
  }
  
  /**
   * Get all available models for the used API key
   *
   * @returns a DocHorizonResponse containing all found models for the used API key
   * @see {@link DocHorizonResponse}
   */
  export async function getModels(): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = {
      url: routeMapping.slugList,
      method: "GET",
    };

    return await APIFunctionalities.request({ endpoint });
  }
  
  /**
   * Get the JSON schema of a model
   * @param slug - the slug of the model you want to get the JSON schema of
   *
   * @returns a DocHorizonResponse containing the JSON schema of a provided model
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
   * Capture data from a document using a model created with the DocHorizon Model Builder
   * asynchronously
   * @param src - either a string indicating a document, or a DocHorizonDocument
   * @see {@link DocHorizonDocument}
   * @param slug - the slug of the model configuration you want to use
   * @param version - the version of the model you want to use
   * @param options - an object containing any asynchronous options you want to apply to the API
   * call
   * @see {@link AsyncOptions}
   *
   * @returns a DocHorizonResponse containing the results from the financial document capturer
   * @see {@link DocHorizonResponse}
   */
  export async function captureAsync(
    src: string | string[] | DocHorizonDocument | DocHorizonDocument[],
    slug: string,
    options?: AsyncOptions,
    version?: number,
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
      version,
    });
  }
  
  /**
   * Get the status of a model builder async job
   * @param slug - the slug of model that was used in the job you wish to know the status of
   * @param job_id - the id of the job you wish to know the status of
   *
   * @returns a DocHorizonResponse containing status information about the found model builder job
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
   * Get all available model builder async jobs for a particular model
   * @param slug - the slug of the model you wish to get all async jobs from
   *
   * @returns a DocHorizonResponse containing all found async jobs for a particular model
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
   * Get a list of all available model builder async jobs for a particular model
   * @param slug - the slug of the model you wish to get all async jobs from
   * @param status - optionally, provide an AsyncStatus to filter the results on
   * @see {@link AsyncStatus} for available statusses
   * @returns a list containing all found async job ids for a particular model
   */
  export async function getListOfJobIds(slug: string, status?: AsyncStatus) {
    const res = await getAsyncJobs(slug);
    return await AsyncService.getListOfJobIds(res, status);
  }
  
  /**
   * Remove a model builder async job
   * @param slug - the slug of the model you wish to delete
   * @param job_id - the job_id of the async job you wish to delete
   *
   * @returns a DocHorizonResponse containing deletion information
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
   * Get logs for a model builder async job
   * @param slug - the slug of the model used
   * @param job_id - the job id you wish to obtain logs from
   *
   * @returns a DocHorizonResponse containing any found logs for the provided slug and job id
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
      endpoint,
      job_id,
    });
  }
  
  /**
   * Get the results of a model builder async job
   * @param slug - the slug of the used model builder model
   * @param job_id - the id of the job you wish to get the results off
   *
   * @returns a DocHorizonResponse containing the results from the model builder capturer
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

  function unpackModelData(
    result: DocHorizonResponse,
  ): ModelPromptBuilderConfigResult[] {
    const data: any = result.docHorizonData.data;

    const isModelConfigResult = (
      result: any,
    ): result is ModelPromptBuilderConfigResult[] => {
      return result[0].name !== undefined && result[0].slug !== undefined;
    };

    if (isModelConfigResult(data)) {
      return data;
    }
    return [];
  }
  
  /**
   * Get a list of all available model builder configurations for the used API key
   *
   * @returns a list of available models
   */
  export async function getModelsList(): Promise<string[]> {
    const result = await getModels();
    const models: ModelPromptBuilderConfigResult[] | undefined =
      unpackModelData(result);
    const configList: string[] = [];

    if (models) {
      for (const model of models) {
        configList.push(model.slug);
      }
    }

    return configList;
  }
}
