import * as fs from "fs";
import { APIMethod, Endpoint } from "./Types/ApiTypes";
import {
  ApiEndpoint,
  ApiJsonFile,
  EndpointData,
  JsonSchemaString,
  Path,
  Schema,
  SchemaProperties,
} from "./Types/BodyBuilderTypes";
import { DocHorizonRequestData } from "./Types/UserOptionsTypes";

export class JSONBodyBuilder {
  private static JSONData: ApiJsonFile = JSON.parse(
    fs.readFileSync("./api.json", "utf-8"),
  );
  private static endpointsList: Path = this.getPaths();
  private static endpointsData: Record<string, ApiEndpoint> =
    this.getPathData();
  private static schemasList: string[] = this.getSchemas();

  private static schemasData: Record<string, Schema> = this.getSchemaData();

  private static url: string;
  private static method: APIMethod;
  private static mainSchema: Record<string, any>;

  private static getPaths(): Path {
    return Object.keys(this.JSONData.paths);
  }

  private static getPathData(): Record<string, ApiEndpoint> {
    const endpointsData: Record<string, ApiEndpoint> = {};

    for (let key in this.endpointsList) {
      const actualKey = this.endpointsList[key];
      endpointsData[actualKey] = this.JSONData.paths[actualKey];
    }

    return endpointsData;
  }

  private static isPath() {
    return this.endpointsList.includes(JSONBodyBuilder.url);
  }

  private static getPath(): EndpointData {
    if (this.isPath()) {
      const method = JSONBodyBuilder.method.toLowerCase();
      const endpoint: ApiEndpoint = this.endpointsData[JSONBodyBuilder.url];
      return endpoint[method];
    } else {
      throw Error("No EndpointData could be found!");
    }
  }

  private static getSchemas(): string[] {
    return Object.keys(this.JSONData.components.schemas);
  }

  private static getSchemaData(): Record<string, Schema> {
    const schemasData: Record<string, Schema> = {};

    for (const key of this.schemasList) {
      schemasData[key] = this.JSONData.components.schemas[key];
    }

    return schemasData;
  }

  private static getSchemaString(): string {
    const pathObject = this.getPath().requestBody;

    if (pathObject != null) {
      const schemaObject: JsonSchemaString =
        pathObject.content["application/json"].schema;
      const schemaString = this.getSchemaUrl(schemaObject);

      if (!schemaString) {
        throw Error(
          "DocHorizon Error: Cannot find schema during JSON creation step!",
        );
      } else {
        return schemaString;
      }
    }

    return "";
  }

  private static getSchemaUrl(schemaString: JsonSchemaString): string {
    const schemaPart = schemaString.$ref;
    const splitString: string[] = schemaPart.split("/");
    const popped = splitString.pop();

    if (!popped) {
      throw Error(
        "DocHorizon Error: Something went wrong while trying to split a schema reference string!",
      );
    }

    return popped;
  }

  private static getSchema(schema: string): Schema {
    return this.schemasData[schema];
  }

  static buildBody(endpoint: Endpoint, bodyData: DocHorizonRequestData) {
    this.initBodyBuilder(endpoint);

    if (!bodyData.documents) {
      throw Error("DocHorizon Error: No document provided!");
    }

    const mainProperties: SchemaProperties =
      JSONBodyBuilder.mainSchema.properties;

    return JSONBodyBuilder.parseProperties(mainProperties, bodyData);
  }

  private static parseProperties(
    properties: SchemaProperties,
    requestData: DocHorizonRequestData,
  ) {
    const jsonBody: Record<string, any> = {};
    const contains = (key: string) => {
      return Object.keys(requestData).includes(key);
    };

    for (const property of Object.keys(properties)) {
      if (contains(property)) {
        jsonBody[property] = requestData[property];
      } else if (property === "document" || property === "documents") {
        jsonBody[property] = requestData.documents;
      }
    }

    return jsonBody;
  }

  private static initBodyBuilder(endpoint: Endpoint) {
    this.url = endpoint.url;
    this.method = endpoint.method;

    const whichSchema: string = JSONBodyBuilder.getSchemaString();
    const schema: Schema = JSONBodyBuilder.getSchema(whichSchema);

    if (!schema) {
      throw new Error("DocHorizon Error: Incorrect Endpoint Url Provided");
    } else {
      this.mainSchema = schema;
    }
  }
}
