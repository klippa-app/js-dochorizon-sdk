import { FinancialService } from "./src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.service";
import { APIFunctionalities } from "./src/ApiCommunicationsWrapper/Services/APIFunctions";
import { CIAService } from "./src/ApiCommunicationsWrapper/Services/CIA/CIA.service";
import { CapturingService } from "./src/ApiCommunicationsWrapper/Services/DocumentCapturing/Capturing.service";
import { DocumentToolkitService } from "./src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.service";
import { GenericService } from "./src/ApiCommunicationsWrapper/Services/Capturing/Generic/Generic.service";
import { PromptBuilderService } from "./src/ApiCommunicationsWrapper/Services/Capturing/PromptBuilder/PromptBuilder.service";
import { StorageService } from "./src/ApiCommunicationsWrapper/Services/Storage/Storage.service";
import { AuthService } from "./src/ApiCommunicationsWrapper/Services/Auth/Auth.service";
import { ModelBuilderService } from "./src/ApiCommunicationsWrapper/Services/Capturing/ModelBuilder/ModelBuilder.service";

namespace DocHorizon {
  export const Auth = AuthService;
  export const Financial = FinancialService;
  export const Generic = GenericService;
  export const Prompt = PromptBuilderService;
  //export const Model = ModelBuilderService;
  //export const Cia = CIAService;
  export const Capturing = CapturingService;
  export const DocumentToolkit = DocumentToolkitService;
  export const Storage = StorageService;

  //Authenticate the API Functionalities with an api key
  export function authenticate(apikey: string) {
    APIFunctionalities.initAPI(apikey);
  }

  //Remove the API key and unauthenticate
  export function unAuthenticate() {
    APIFunctionalities.initAPI("");
  }
}

export { DocHorizon };
