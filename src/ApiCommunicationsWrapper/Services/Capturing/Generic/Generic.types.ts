import { AsyncOptions } from "../Async.types";

/**
 * Object to indicate how to output the generic capturer results
 *
 * @property output_target - "Base64" or "StorageAPI"
 *
 * @interface
 */
export type GenericXlsxOptions = {
  output_target: "Base64" | "StorageAPI";
};

export type GenericAsyncOptions = GenericXlsxOptions & AsyncOptions;
