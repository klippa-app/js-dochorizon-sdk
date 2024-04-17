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
	/**
	 * Auth Service
	 * @namespace
	 */
	export const Auth = AuthService;
	
	/**
	 * Financial Service
	 * @namespace
	 */
	export const Financial = FinancialService;
	
	/**
	 * Generic Service
	 * @namespace
	 */
	export const Generic = GenericService;
	
	/**
	 * Prompt Service
	 * @namespace
	 */
	export const Prompt = PromptBuilderService;
	//export const Model = ModelBuilderService;
	//export const Cia = CIAService;
	
	/**
	 * Capturing Service
	 * @namespace
	 */
	export const Capturing = CapturingService;
	
	/**
	 * DocumentToolkit Service
	 * @namespace
	 */
	export const DocumentToolkit = DocumentToolkitService;
	
	/**
	 * Storage Service
	 * @namespace
	 */
	export const Storage = StorageService;
	
	/**
	 * Authenticate the API with an API key
	 *
	 * @param apikey - the API key to authenticate with
	 */
	export function authenticate(apikey: string) {
		APIFunctionalities.initAPI(apikey);
	}
	
	/**
	 * Unauthenticate by removing the API key
	 * this will render the user unable to do any API requests
	 * and will permanently remove the api key string from any vars/services
	 */
	export function unAuthenticate() {
		APIFunctionalities.initAPI("");
	}
}

export { DocHorizon };