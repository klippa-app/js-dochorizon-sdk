import { DocHorizonResponse } from "../src/ApiCommunicationsWrapper/Types/ApiTypes";
import { AsyncPostResult } from "../src/ApiCommunicationsWrapper/Services/Capturing/Async.types";
import { APIFunctionalities } from "../src/ApiCommunicationsWrapper/Services/APIFunctions";
import unpackDocHorizonData = APIFunctionalities.unpackDocHorizonData;

const dotenv = require("dotenv");
dotenv.config();

export function getApiKeyFromEnv() {
  const apiKey: undefined | string = process.env.API_KEY;

  if (!apiKey) {
    throw Error("Something went wrong trying to get the API key!");
  }

  return apiKey;
}

export function unpackAsyncPostResult(result: DocHorizonResponse): string {
  const isAsyncPostResult = (result: any): result is AsyncPostResult => {
    return result.job_id !== undefined;
  };

  const unpacked = unpackDocHorizonData(result);
  if (isAsyncPostResult(unpacked)) {
    return unpacked.job_id;
  }
  return "";
}
