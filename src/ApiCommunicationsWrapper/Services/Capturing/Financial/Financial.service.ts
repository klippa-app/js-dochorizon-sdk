import { Endpoint, DocHorizonResponse } from "../../../Types/ApiTypes";
import { JSONBodyBuilder } from "../../../JSONBodyBuilder";
import { APIFunctionalities } from "../../APIFunctions";
import {
  FinancialAsyncOptions,
  FinancialOptions,
  keyword_matching,
  FinancialPresetsResult,
} from "./Financial.types";
import { parseDocHorizonDocumentsList } from "../../DocHorizonDocumentFunctions";
import {
  DocHorizonDocument,
  DocHorizonRequestData,
} from "../../../Types/UserOptionsTypes";
import { AsyncService } from "../Async.service";
import { AdditionalBodyData } from "../../../Types/AdditionalBodyData";
import { AsyncStatus } from "../Async.types";

export namespace FinancialService {
  const baseUrl = "/api/services/document_capturing/v1/financial";
  const routeMapping = {
    capture: baseUrl,
    captureAsyncOrGetAsyncList: `${baseUrl}/async`,
    asyncStatusOrRemove: `${baseUrl}/async/{job_id}`,
    asyncLogs: `${baseUrl}/async/{job_id}/logs`,
    asyncResult: `${baseUrl}/async/{job_id}/result`,
    presets: `${baseUrl}/presets`,
    schema: `${baseUrl}/schema`,
  };

  function parseFinancialOptions(
    options: FinancialOptions | FinancialAsyncOptions,
  ): Record<string, string | object> {
    const additionalBodyData: AdditionalBodyData = {};
    if (options.preset) {
      additionalBodyData.preset = { slug: options.preset };
    }
    if (options.keyword_matching) {
      const keywords: keyword_matching[] = options.keyword_matching;
      let rules = [];
      for (const keyword of Object.values(keywords)) {
        let k = keyword.id;
        let v = keyword.keywords;

        let obj;
        if (Array.isArray(v)) {
          obj = { id: k, keywords: v };
        } else {
          obj = { id: k, regex: v };
        }

        rules.push(obj);
      }
      additionalBodyData.components = {
        keyword_matching: { rules: rules },
      };
    }
    if (options.relation_matching) {
      additionalBodyData.components = {
        ...additionalBodyData.components,
        relation_matching: options.relation_matching,
      };
    }

    return additionalBodyData;
  }

  //Get available presets for the provided Api key
  export async function getPresets() {
    const endpoint: Endpoint = {
      url: routeMapping.presets,
      method: "GET",
    };

    return await APIFunctionalities.request({ endpoint });
  }

  //Get a list of available presets for the provided Api key
  export async function getPresetList(): Promise<string[]> {
    const result = await getPresets();
    const presets: FinancialPresetsResult[] = unpackPresetData(result);
    const presetList: string[] = [];

    for (const preset of presets) {
      presetList.push(preset.slug);
    }

    return presetList;
  }

  //Get a list of enabled components from the provided preset
  export async function getEnabledComponentsFromPreset(
    preset: string,
  ): Promise<string[]> {
    const result = await getPresets();
    const presets: FinancialPresetsResult[] = unpackPresetData(result);

    const enabledComponents: string[] = [];

    const suppliedPreset = presets.find((obj) => {
      return obj.slug === preset;
    });

    suppliedPreset?.components.forEach((component) => {
      if (component.options.enabled) {
        enabledComponents.push(component.name);
      }
    });

    return enabledComponents;
  }

  //Capture data from a financial document
  export async function capture(
    src: string | string[] | DocHorizonDocument | DocHorizonDocument[],
    options?: FinancialOptions,
  ): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = {
      url: routeMapping.capture,
      method: "POST",
    };

    let additionalBodyData: AdditionalBodyData = {};
    if (options) {
      additionalBodyData = parseFinancialOptions(options);
    }

    const srcList = APIFunctionalities.transformList(src);
    const body: DocHorizonRequestData = {
      documents: parseDocHorizonDocumentsList(srcList),
      ...additionalBodyData,
    };

    const JSONBody = JSONBodyBuilder.buildBody(endpoint, body);
    return await APIFunctionalities.request({ endpoint, body: JSONBody });
  }

  //Capture data from a financial document asynchronously
  export async function captureAsync(
    src: string | string[] | DocHorizonDocument | DocHorizonDocument[],
    options?: FinancialAsyncOptions,
  ): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = {
      url: routeMapping.captureAsyncOrGetAsyncList,
      method: "POST",
    };

    let additionalBodyData: AdditionalBodyData = {};
    if (options) {
      additionalBodyData = parseFinancialOptions(options);
    }

    return AsyncService.parseAsync({
      src,
      endpoint,
      additionalBodyData,
      options,
    });
  }

  //Get the status of a financial async job
  export async function getAsyncStatus(
    job_id: string,
  ): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = {
      url: routeMapping.asyncStatusOrRemove,
      method: "GET",
    };

    return AsyncService.getOrDeleteAsyncRequest({
      endpoint,
      job_id,
    });
  }

  //Get all available financial async jobs
  export async function getAsyncJobs(): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = {
      url: routeMapping.captureAsyncOrGetAsyncList,
      method: "GET",
    };

    return AsyncService.getOrDeleteAsyncRequest({
      endpoint,
    });
  }

  //Get a list of available financial async jobs
  export async function getListOfJobIds(status?: AsyncStatus) {
    const res = await getAsyncJobs();
    return await AsyncService.getListOfJobIds(res, status);
  }

  //Remove a financial async job
  export async function removeAsyncJob(
    job_id: string,
  ): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = {
      url: routeMapping.asyncStatusOrRemove,
      method: "DELETE",
    };
    return AsyncService.getOrDeleteAsyncRequest({
      endpoint,
      job_id,
    });
  }

  //Get logs of a financial async job
  export async function getLogsOfAsyncJob(
    job_id: string,
  ): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = {
      url: routeMapping.asyncLogs,
      method: "GET",
    };
    return AsyncService.getOrDeleteAsyncRequest({
      endpoint,
      job_id,
    });
  }

  //Get results of a financial async job
  export async function getResultsOfAsyncJob(
    job_id: string,
  ): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = {
      url: routeMapping.asyncResult,
      method: "GET",
    };
    return AsyncService.getOrDeleteAsyncRequest({
      endpoint,
      job_id,
    });
  }

  function unpackPresetData(
    result: DocHorizonResponse,
  ): FinancialPresetsResult[] {
    const presets: any = result.docHorizonData.data;

    const isFinancialPresetResult = (
      result: any,
    ): result is FinancialPresetsResult[] => {
      return result[0].components !== undefined;
    };

    if (isFinancialPresetResult(presets)) {
      return presets;
    }
    return [];
  }
}
