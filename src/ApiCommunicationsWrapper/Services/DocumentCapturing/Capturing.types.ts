export type Model = {
  name: ServiceName;
  service: ServiceIdentifier;
};

export type ServiceName =
  | "Financial"
  | "Identity"
  | "Generic"
  | "Prompt builder";

export type ServiceIdentifier =
  | "document_capturing_financial"
  | "document_capturing_generic"
  | "document_capturing_identity"
  | "document_capturing_prompt_builder";
