import {API_URL} from "../vars";

require("dotenv").config();

import {
  ApiResponse,
  DocHorizonResponse,
  RequestProperties,
} from "../Types/ApiTypes";
import fs from "fs";

/**
 * API functionalities namespace
 *
 * exposing all the general API functionalities such as authentication
 */
export namespace APIFunctionalities {
  let key: string = "";
  
  /**
   * Initialize the API with an API key
   * @param apikey - the api key to authenticate with
   */
  export function initAPI(apikey: string) {
    key = apikey;
  }
  
  export async function request(
    requestProperties: RequestProperties,
  ): Promise<DocHorizonResponse> {
    const { endpoint, params, body } = requestProperties;
    let url = `${process.env.API_URL ?? API_URL}${endpoint.url}`;

    if (params?.PathParams) {
      url = processPathParameters(url, params.PathParams);
    }
    if (params?.QueryParams) {
      url = processQueryParameters(url, params.QueryParams);
    }

    const headers = { "x-api-key": key, "content-type": "application/json" };

    let options: RequestInit = {
      method: endpoint.method,
      headers: headers,
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);

    if (response.status === 404) {
      throw Error(
        "DocHorizon Error: Could Not Find The API Endpoint Specified!",
      );
    }

    const docHorizonData: ApiResponse = (await response.json()) as ApiResponse;

    const httpCode = response.status;

    return { httpCode, docHorizonData };
  }

  function processPathParameters(
    url: string,
    data: Record<string, string | number | boolean>,
  ) {
    for (const field in data) {
      if (url.includes(field)) {
        url = url.replace(field, data[field].toString());
        url = url.replace(field.toString(), data[field].toString());
        url = url.replace("{", "");
        url = url.replace("}", "");
      }
    }
    return url;
  }

  function processQueryParameters(
    url: string,
    data: Record<string, string | number | boolean>,
  ) {
    let paramString: string = "";

    for (let field in data) {
      const defaultParameterValue = `${paramString}&${field}=${encodeURIComponent(data[field])}`;
      const emptyParameterValue = `${paramString}${field}=${encodeURIComponent(data[field])}`;

      if (paramString === "") {
        paramString = emptyParameterValue;
        continue;
      }
      paramString = defaultParameterValue;
    }

    return `${url}?${paramString}`;
  }

  export function transformList(src: any) {
    if (!Array.isArray(src)) {
      return [src];
    }
    return src;
  }

  export function fileToBase64(data: string): string {
    return fs.readFileSync(data, { encoding: "base64" });
  }

  export function unpackDocHorizonData(result: DocHorizonResponse) {
    return result.docHorizonData.data;
  }
}
