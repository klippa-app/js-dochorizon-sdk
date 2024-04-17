/**
 * How a capturing model is defined
 *
 * @property name - name of the capturing service can be any of the ServiceName types
 * @see {@link ServiceName}
 *
 * @property service - name of the service identifier which can be any of the ServiceIdentifier
 * types
 * @see {@link ServiceIdentifier}
 *
 * @interface
 */
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
