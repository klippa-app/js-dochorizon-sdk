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

/**
 * A document object that can be used in capturing services
 *
 * @property data - string containing path pointing to a document
 * @property url - string containing url pointing to a document
 * @property file_id - string containing file id from DocHorizon storage pointing to a document
 * @property content_type - string indicating the content type of the document
 * @property password - string containing a password to use if the document is password-protected
 * @property page_ranges - list containing (a) string(s) indicating which page ranges of the
 * document to use
 * @property filename - string indicating the name of the file
 */
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
