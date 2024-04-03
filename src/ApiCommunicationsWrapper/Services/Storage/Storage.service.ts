import { DocHorizonResponse, Endpoint } from "../../Types/ApiTypes";
import { DocHorizonDocument } from "../../Types/UserOptionsTypes";
import { parseDocHorizonDocument } from "../DocHorizonDocumentFunctions";
import { APIFunctionalities } from "../APIFunctions";

export namespace StorageService {
  const routeMapping = {
    save: "/api/services/storage/v1/files",
    get: "/api/services/storage/v1/files/{file_id}",
  };

  //Save a document to DocHorizon storage
  export async function saveToStorage(
    src: DocHorizonDocument | string,
  ): Promise<DocHorizonResponse> {
    const endpoint: Endpoint = {
      url: routeMapping.save,
      method: "POST",
    };

    const document = parseDocHorizonDocument(src);
    return await APIFunctionalities.request({ endpoint, body: document });
  }
}
