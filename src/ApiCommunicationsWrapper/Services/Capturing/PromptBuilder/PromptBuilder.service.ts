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

  //Capture data from a document using a specific prompt
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

  //Get all available prompt configurations
  export async function getConfigurations(): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = {
      url: routeMapping.slugList,
      method: "GET",
    };

    return await APIFunctionalities.request({ endpoint });
  }

  //Get the Json schema of a prompt configuration
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

  //Capture data from a document using a specific prompt asynchronously
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

  //Get the status of a prompt builder async job
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

  //Get all available prompt builder async jobs
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

  //Get a list of available prompt builder async jobs
  export async function getListOfJobIds(slug: string, status?: AsyncStatus) {
    const res = await getAsyncJobs(slug);
    return await AsyncService.getListOfJobIds(res, status);
  }

  //Remove a prompt builder async job
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

  //Get logs of a prompt builder async job
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

  //Get results of a prompt builder async job
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

  //Get a list of available prompt builder configurations
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
