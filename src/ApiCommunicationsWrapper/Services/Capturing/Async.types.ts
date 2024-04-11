import { Endpoint } from "../../Types/ApiTypes";
import { DocHorizonDocument, Options } from "../../Types/UserOptionsTypes";
import { AdditionalBodyData } from "../../Types/AdditionalBodyData";

type Authorization_header = {
  token: string;
  type: string;
};

type Basic_auth = {
  username: string;
  password: string;
};

type CustomHeaderItem = {
  header_key: string;
  header_value: string;
};

type AsyncType = "on_finish" | "on_status_update";

/**
 * Object needed to configure webhooks for async requests
 *
 * @property auth - configure authentication in the form of either Authorization Header or Basic
 * Authorization
 * @see {@link Authorization_header}
 * @see {@link Basic_auth}
 *
 * @property custom_headers - An object containing any custom headers to send
 * @see {@link CustomHeaderItem}
 *
 * @property types - a list of strings/string indicating "on_status_update" or "on_finish" or
 * both
 * @property url - a string containin the url of the endpoint to communicate with
 */
type Webhook = {
  auth?: Authorization_header | Basic_auth;
  custom_headers?: CustomHeaderItem[] | CustomHeaderItem;
  types: AsyncType[] | AsyncType;
  url: string;
};

/**
 * Extra options that can be applied to asynchronous requests
 *
 * @property hitl - string indicating which hitl configuration to use
 * @property webhook - Webhook object to configure webhooks
 */
type AsyncOptions = {
  hitl?: string;
  webhook?: Webhook;
};

type AsyncJobList = {
  jobs: Job[];
  paging_data: object;
};

type Job = {
  create_time: string;
  job_id: string;
  status: AsyncStatus;
};

type AsyncStatus =
  | "done"
  | "error"
  | "closed"
  | "rejected"
  | "in_queue"
  | "processing"
  | "hitl";

const isAsyncOption = (options: object): options is AsyncOptions => {
  return "hitl" in options || "webhook" in options;
};

export {
  AsyncType,
  Authorization_header,
  Basic_auth,
  Webhook,
  CustomHeaderItem,
  AsyncOptions,
  AsyncStatus,
  AsyncJobList,
  Job,
  isAsyncOption,
  GetOrDeleteProps,
  PostProps,
  AsyncPostResult,
};

export type AsyncJobCreationResult = {
  job_id: string;
};

type GetOrDeleteProps = {
  endpoint: Endpoint;
  job_id?: string;
  slug?: string;
};

type PostProps = {
  endpoint: Endpoint;
  src: string | string[] | DocHorizonDocument | DocHorizonDocument[];
  additionalBodyData: AdditionalBodyData;
  options?: Options;
  slug?: string;
  version?: number;
};

type AsyncPostResult = {
  job_id: string;
};
