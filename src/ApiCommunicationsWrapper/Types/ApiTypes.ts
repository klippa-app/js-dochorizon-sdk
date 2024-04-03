import {
  AsyncJobList,
  AsyncPostResult,
} from "../Services/Capturing/Async.types";
import { Model } from "../Services/DocumentCapturing/Capturing.types";
import {
  Document,
  Documents,
  RenderResult,
} from "../Services/DocumentToolkit/DocumentToolkit.types";
import { FinancialPresetsResult } from "../Services/Capturing/Financial/Financial.types";
import { ModelPromptBuilderConfigResult } from "../Services/Capturing/PromptBuilder/PromptBuilder.types";

export type APIMethod = "GET" | "POST" | "PUT" | "DELETE";

export type Endpoint = {
  method: APIMethod;
  url: string;
};

export type ParamData = {
  PathParams?: Record<string, string | number | boolean>;
  QueryParams?: Record<string, string | number | boolean>;
};

export type ApiSharedResult = {
  result: "success" | "response";
  request_id: string;
  code?: number;
};

export type ApiResponse = ApiSharedResult & {
  data?: Record<string, any>;
};

export type ApiResponseData = ApiSharedResult & {
  data?:
    | FinancialPresetsResult[]
    | ModelPromptBuilderConfigResult[]
    | AsyncJobList
    | Model[]
    | Document[]
    | Document
    | Documents
    | RenderResult
    | AsyncPostResult
    | Record<string, any>;
};

export type DocHorizonResponse = {
  httpCode: number;
  docHorizonData: ApiResponseData;
};

export type RequestProperties = {
  endpoint: Endpoint;
  params?: ParamData;
  body?: Record<string, string | object>;
};
