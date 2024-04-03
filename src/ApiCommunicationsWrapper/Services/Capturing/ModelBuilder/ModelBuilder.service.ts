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

  //Capture data from a document using a specific model
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

  //Get all available models
  export async function getModels(): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = {
      url: routeMapping.slugList,
      method: "GET",
    };

    return await APIFunctionalities.request({ endpoint });
  }

  //Get the Json schema of a model
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

  //Capture data from a document using a specific model asynchronously
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

  //Get the status of a model builder async job
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

  //Get all available model builder async jobs
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

  //Get a list of available model builder async jobs
  export async function getListOfJobIds(slug: string, status?: AsyncStatus) {
    const res = await getAsyncJobs(slug);
    return await AsyncService.getListOfJobIds(res, status);
  }

  //Remove a model builder async job
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

  //Get logs of a model builder async job
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

  //Get results of a model builder async job
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

  //Get a list of available model builder configurations
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
