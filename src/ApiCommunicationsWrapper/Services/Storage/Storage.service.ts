import { DocHorizonResponse, Endpoint } from "../../Types/ApiTypes";
import { DocHorizonDocument } from "../../Types/UserOptionsTypes";
import { parseDocHorizonDocument } from "../DocHorizonDocumentFunctions";
import { APIFunctionalities } from "../APIFunctions";

/**
 * The Storage Service
 *
 * Exposes a function to save a file to DocHorizon storage
 */
export namespace StorageService {
  const routeMapping = {
    save: "/api/services/storage/v1/files",
    get: "/api/services/storage/v1/files/{file_id}",
  };
  
  /**
   * Save a file to DocHorizon storage
   * @param src - either a string indicating a document, or a DocHorizonDocument
   * @see {@link DocHorizonDocument}
   *
   * @returns a DocHorizonResponse indicating whether a file has been succesfully saved
   * @see {@link DocHorizonResponse}
   */
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
