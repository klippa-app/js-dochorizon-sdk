import { DocHorizonResponse, Endpoint } from "../../Types/ApiTypes";
import { APIFunctionalities } from "../APIFunctions";
import { Model } from "./Capturing.types";

/**
 * The Capturing Service
 *
 * Exposing functions related to the capturing models
 */
export namespace CapturingService {
  const routeMapping = {
    listEnabledModels: "/api/services/document_capturing/v1/enabled_models",
  };
  
  /**
   * Get all enabled capturing models for this API key
   *
   * @returns a DocHorizonResponse containing the enabled capturing models for the used API key
   * @see {@link DocHorizonResponse}
   */
  export async function listEnabledModels(): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = {
      url: routeMapping.listEnabledModels,
      method: "GET",
    };

    return await APIFunctionalities.request({ endpoint });
  }
  
  /**
   * Get a list of all enabled capturing models for this API key
   *
   * @returns a list of strings containing the enabled capturing models for the used
   * API key
   */
  export async function getListOfEnabledCapturingModels(): Promise<string[]> {
    const result = await listEnabledModels();
    const models: Model[] = unpackDocumentCapturingServicesResults(result);

    const enabled: string[] = [];

    for (const model of models) {
      enabled.push(model.name);
    }

    return enabled;
  }

  function unpackDocumentCapturingServicesResults(
    result: DocHorizonResponse,
  ): Model[] {
    const data = result.docHorizonData.data;

    const isCapturingServiceResults = (result: any): result is Model[] => {
      return result[0].name !== undefined && result[0].service !== undefined;
    };

    if (isCapturingServiceResults(data)) {
      return data;
    }
    return [];
  }
}
