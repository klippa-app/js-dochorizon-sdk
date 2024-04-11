import { DocHorizonResponse, Endpoint } from "../../Types/ApiTypes";
import { APIFunctionalities } from "../APIFunctions";

/**
 * AuthService
 */
export namespace AuthService {
  const routeMapping = {
    authInfo: "/api/services/auth/v1/info",
  };
  
  /**
   * Obtain information about the used api key
   *
   * @returns a DocHorizonResponse object containing found information on the used api key
   * @see {@link DocHorizonResponse}
   */
  export async function getApiKeyInfo(): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = {
      url: routeMapping.authInfo,
      method: "GET",
    };
    return await APIFunctionalities.request({ endpoint });
  }
}
