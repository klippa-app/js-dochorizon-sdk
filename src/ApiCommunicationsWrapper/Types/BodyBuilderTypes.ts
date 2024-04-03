type ApiJsonFile = {
  openapi: string;
  info: object;
  servers: object;
  paths: Path;
  components: Components;
  tags: object;
  security: object;
};

type Components = {
  schemas: SchemaPart;
  securitySchemes: object;
};

type SchemaPart = {
  [key: string]: Schema;
};

type Path = {
  [key: string]: any;
};

type JsonSchemaString = { $ref: string };

type Schema = {
  type: string;
  properties: SchemaProperties;
  description?: string;
};

type ApiEndpoint = Record<string, EndpointData>;

type JsonSchemaObject = {
  schema: { $ref: string };
};

type RequestBody = {
  content: { "application/json": JsonSchemaObject };
};

type EndpointData = {
  tags: string[];
  summary: string;
  description: string;
  operationId: string;
  parameters?: string[];
  requestBody?: RequestBody;
  responses: object;
};

type SchemaProperties = Record<string, JsonSchemaString | SchemaProperty>;

type SchemaProperty = {
  title: string;
  type: string;
  description?: string;
  enum?: string[];
  nullable?: boolean;
  items?: JsonSchemaString;
};

function isSchemaString(value: any): value is JsonSchemaString {
  return value["$ref"] !== undefined;
}

function isSchemaProperty(value: any): value is SchemaProperty {
  return (value as SchemaProperty).type !== undefined;
}

export {
  JsonSchemaString,
  JsonSchemaObject,
  SchemaProperty,
  SchemaProperties,
  EndpointData,
  ApiEndpoint,
  Schema,
  RequestBody,
  SchemaPart,
  Path,
  ApiJsonFile,
  Components,
  isSchemaString,
  isSchemaProperty,
};
