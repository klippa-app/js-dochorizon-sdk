import { Endpoint } from "../../Types/ApiTypes";
import { DocHorizonDocument, Options } from "../../Types/UserOptionsTypes";
import { AdditionalBodyData } from "../../Types/AdditionalBodyData";

/**
 * Object needed to configure authentication in the form of type authorization header
 *
 * @property token - string containing the token
 * @property type - string containing the token type
 *
 * @interface
 */
type Authorization_header = {
  token: string;
  type: string;
};

/**
 * Object needed to configure basic authorization for webhooks
 *
 * @property username - string containing the username
 * @property password - string containing the password
 *
 * @interface
 */
type Basic_auth = {
  username: string;
  password: string;
};

/**
 * Object containing a custom header item to be added to a webhook request
 *
 * @property header_key - string containing the custom header key
 * @property header_value - string containing the custom header value
 *
 * @interface
 */
type CustomHeaderItem = {
  header_key: string;
  header_value: string;
};

/**
 * Which asynchronous webhook type you would like to set up, of which the following two are
 * valid options
 */
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
 *
 * @interface
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
 *
 * @interface
 */
type AsyncOptions = {
  hitl?: string;
  webhook?: Webhook;
};

/**
 * Results type containing a list of jobs found and a paging_data object containing information
 * about the search results
 *
 * @property jobs - List of jobs
 * @see {@link Job}
 *
 * @property paging_data - Object containing information about search results
 *
 * @interface
 */
type AsyncJobList = {
  jobs: Job[];
  paging_data: object;
};

/**
 * Definition of a found job
 *
 * @property create_time - when the job was created
 * @property job_id - the id of the job
 * @property status - the status of the job
 * @see {@link AsyncStatus}
 *
 * @interface
 *
 */
type Job = {
  create_time: string;
  job_id: string;
  status: AsyncStatus;
};

/**
 * The available async statusses to use for filtering
 *
 */
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

/**
 * The results from an async post request
 *
 * @property job_id - a string containing the created job id
 *
 * @interface
 */
type AsyncPostResult = {
  job_id: string;
};
