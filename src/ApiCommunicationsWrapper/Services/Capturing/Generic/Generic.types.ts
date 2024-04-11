import { AsyncOptions } from "../Async.types";

/**
 * Object to indicate how to output the generic capturer results
 *
 * @property output_target - "Base64" or "StorageAPI"
 */
export type GenericXlsxOptions = {
  //Whether to output the results as Base64 or save it to DocHorizon storage
  output_target: "Base64" | "StorageAPI";
};

export type GenericAsyncOptions = GenericXlsxOptions & AsyncOptions;
