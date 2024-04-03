import { AsyncOptions } from "../Async.types";

export type GenericXlsxOptions = {
  //Whether to output the results as Base64 or save it to DocHorizon storage
  output_target: "Base64" | "StorageAPI";
};

export type GenericAsyncOptions = GenericXlsxOptions & AsyncOptions;
