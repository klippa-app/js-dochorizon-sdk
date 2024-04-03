import { DocHorizonResponse, Endpoint } from "../../Types/ApiTypes";
import { APIFunctionalities } from "../APIFunctions";

export namespace AuthService {
  const routeMapping = {
    authInfo: "/api/services/auth/v1/info",
  };

  //Obtain information about the provided Api key
  export async function getApiKeyInfo(): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = {
      url: routeMapping.authInfo,
      method: "GET",
    };
    return await APIFunctionalities.request({ endpoint });
  }
}
