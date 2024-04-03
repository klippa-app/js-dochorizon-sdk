import {
  FinancialAsyncOptions,
  FinancialOptions,
} from "../Services/Capturing/Financial/Financial.types";
import { GenericXlsxOptions } from "../Services/Capturing/Generic/Generic.types";

type DocumentData = { key: string; data: string };

type DocHorizonRequestBody = {
  document: DocumentData;
  options?: Record<string, any>;
};

type DocHorizonDocument = {
  data?: string;
  url?: string;
  file_id?: string;
  content_type?: string;
  password?: string;
  page_ranges?: string[];
  filename?: string;
};

type DocHorizonRequestData = {
  documents: DocHorizonDocument | DocHorizonDocument[];
  [key: string]: string | object | number | [];
};

const isDocHorizonDocument = (
  apiInput: any,
): apiInput is DocHorizonDocument => {
  return (
    apiInput.data !== undefined ||
    apiInput.url !== undefined ||
    apiInput.file_id !== undefined
  );
};

type Options = FinancialOptions | FinancialAsyncOptions | GenericXlsxOptions;

export {
  DocHorizonRequestBody,
  DocumentData,
  DocHorizonDocument,
  DocHorizonRequestData,
  isDocHorizonDocument,
  Options,
};
