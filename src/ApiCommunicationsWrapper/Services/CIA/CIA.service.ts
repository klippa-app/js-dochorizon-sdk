import { DocHorizonResponse, Endpoint } from "../../Types/ApiTypes";
import { CiaOptions } from "./CIA.types";
import { APIFunctionalities } from "../APIFunctions";

/**
 * CIA Service
 *
 * Exposing the search function to search for company data
 */
export namespace CIAService {
  const routeMapping = {
    ciaSearch: "/api/services/company_information/v1/search",
  };
  
  /**
   * Search for company data given provided parameters/fields
   *
   * @param options - an object containing the search parameters/fields
   * @see {@link CiaOptions}
   *
   * @returns a DocHorizonResponse containing any found data for the CIA search
   */
  export async function search(
    options: CiaOptions,
  ): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = {
      url: routeMapping.ciaSearch,
      method: "GET",
    };
    return await APIFunctionalities.request({
      params: { QueryParams: options },
      endpoint,
    });
  }
}
