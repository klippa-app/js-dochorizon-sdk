import {
  DocHorizonResponse,
  ParamData,
  RequestProperties,
} from "../../Types/ApiTypes";
import {
  AsyncJobCreationResult,
  AsyncJobList,
  AsyncStatus,
  GetOrDeleteProps,
  isAsyncOption,
  Job,
  PostProps,
} from "./Async.types";
import { DocHorizonRequestData } from "../../Types/UserOptionsTypes";
import { parseDocHorizonDocumentsList } from "../DocHorizonDocumentFunctions";
import { APIFunctionalities } from "../APIFunctions";
import { JSONBodyBuilder } from "../../JSONBodyBuilder";

export namespace AsyncService {
  export async function parseAsync(
    postProps: PostProps,
  ): Promise<DocHorizonResponse> {
    const { endpoint, src, additionalBodyData, options, slug, version } =
      postProps;

    if (options && isAsyncOption(options)) {
      if (options.hitl) {
        additionalBodyData.hitl = { slug: options.hitl };
      }
      if (options.webhook) {
        if (typeof options.webhook.types === "string") {
          options.webhook.types = [options.webhook.types];
        }
        additionalBodyData.webhook = options.webhook;
      }
    }

    const srcList = APIFunctionalities.transformList(src);
    const body: DocHorizonRequestData = {
      documents: parseDocHorizonDocumentsList(srcList),
      ...additionalBodyData,
    };
    const JSONBody = JSONBodyBuilder.buildBody(endpoint, body);

    const params: ParamData = {};

    if (slug) {
      params.PathParams = { slug };
    }
    if (version) {
      params.QueryParams = { version };
    }

    const requestData: RequestProperties = {
      endpoint,
      body: JSONBody,
      params,
    };

    return await APIFunctionalities.request(requestData);
  }

  export async function getOrDeleteAsyncRequest(
    props: GetOrDeleteProps,
  ): Promise<DocHorizonResponse> {
    const { endpoint, slug, job_id } = props;
    let pathParams: { job_id?: string; slug?: string } = {};

    if (job_id) {
      pathParams.job_id = job_id;
    }
    if (slug) {
      pathParams.slug = slug;
    }

    return await APIFunctionalities.request({
      endpoint,
      params: { PathParams: pathParams },
    });
  }

  export async function getListOfJobIds(
    res: DocHorizonResponse,
    status?: AsyncStatus,
  ): Promise<string[]> {
    const jobsList: Job[] | undefined = unpackAsyncJobsData(res)?.jobs;
    const listOfJobIds: string[] = [];

    if (jobsList) {
      for (const job of jobsList) {
        if (job.status === status || !status) {
          listOfJobIds.push(job.job_id);
        }
      }
    }

    return listOfJobIds;
  }

  function unpackAsyncJobsData(
    result: DocHorizonResponse,
  ): AsyncJobList | undefined {
    const data = result.docHorizonData.data;
    const isAsyncJobsResult = (result: any): result is AsyncJobList => {
      return result.jobs !== undefined && result.paging_data !== undefined;
    };

    if (isAsyncJobsResult(data)) {
      return data;
    }
  }

  export function unpackAsyncPostResult(
    result: DocHorizonResponse,
  ): AsyncJobCreationResult | undefined {
    const data = result.docHorizonData.data;

    const isAsyncPostResult = (
      result: any,
    ): result is AsyncJobCreationResult => {
      return result.job_id !== undefined;
    };

    if (isAsyncPostResult(data)) {
      return data;
    }
  }
}
