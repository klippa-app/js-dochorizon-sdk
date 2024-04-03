import { DocHorizonResponse, Endpoint } from "../../Types/ApiTypes";
import { CiaOptions } from "./CIA.types";
import { APIFunctionalities } from "../APIFunctions";

export namespace CIAService {
  const routeMapping = {
    ciaSearch: "/api/services/company_information/v1/search",
  };

  //Search for company data given provided parameters
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
