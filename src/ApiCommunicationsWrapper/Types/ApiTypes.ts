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

/**
 * How an endpoint is identified
 *
 * @property method - "GET" or "POST" or "PUT" or "DELETE
 * @property url - string of the url of the endpoint
 *
 * @interface
 */
export type Endpoint = {
  method: APIMethod;
  url: string;
};

/**
 * How parameters are delivered before an API call
 *
 * @property PathParams - a dictionary of key-values where the key stands for the path param
 * field and the value for the string to fill in as parameter in the url
 * @property QueryParams - a dictionary of key-values where the key stand for the field key in
 * the url and the value is the value of said key
 *
 * @
 * @interface
 */
export type ParamData = {
  PathParams?: Record<string, string | number | boolean>;
  QueryParams?: Record<string, string | number | boolean>;
};

/**
 * The standard results obtained when doing an API call
 *
 * @property result - string indicating whether the call was succesful
 * @property request_id - string identifying the request
 * @property code - number indicating a status
 *
 * @interface
 */
export type ApiSharedResult = {
  result: "success" | "response";
  request_id: string;
  code?: number;
};

export type ApiResponse = ApiSharedResult & {
  data?: Record<string, any>;
};

/**
 * The data returned by the API. Its contents are dependent of which service is used
 *
 * @property data - the specific returned data, which type depends on which function used
 * {@link FinancialPresetsResult} FinancialPresetResult
 * {@link ModelPromptBuilderConfigResult} Model or Prompt Config Result
 * {@link AsyncJobList} Async Job Lists Result
 * {@link Model} Model results
 * {@link Document} document data result
 * {@link Documents} document data result, but with page-ranges
 * {@link RenderResult} a list of rendered image data
 * {@link AsyncPostResult} results from async post functions
 * Or Record<string, any> for Anything else that can be mapped as K,V
 *
 * @interface
 */
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

/**
 * The response type obtained as a result of doing an API call
 * @property httpCode - the HTTP code of the request
 * @property docHorizonData - The Api Response Data of the request  {@link ApiResponseData}
 *
 * @interface
 */
export type DocHorizonResponse = {
  httpCode: number;
  docHorizonData: ApiResponseData;
};

/**
 * Properties indicating necessary properties for doing an API request
 *
 * @property endpoint - endpoint data consisting of a url and method
 * {@see {@link Endpoint}}
 * @property params - any path or query parameters present
 * {@see {@link ParamData}}
 * @property body - bodydata delivered in json-like format
 *
 * @interface
 */
export type RequestProperties = {
  endpoint: Endpoint;
  params?: ParamData;
  body?: Record<string, string | object>;
};
