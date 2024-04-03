import { JSONBodyBuilder } from "../../src/ApiCommunicationsWrapper/JSONBodyBuilder";
import { Endpoint } from "../../src/ApiCommunicationsWrapper/Types/ApiTypes";
import { DocHorizonRequestData } from "../../src/ApiCommunicationsWrapper/Types/UserOptionsTypes";
import fs from "fs";

describe("JSON Body Builder Tests", () => {
  const financialPath = "/api/services/document_capturing/v1/financial";
  let endpoint: Endpoint;
  let JSONBody: any;
  const document = fs.readFileSync(`test/testFiles/document.txt`, "utf-8");
  const bodyData: DocHorizonRequestData = { documents: [{ data: document }] };

  beforeAll(() => {
    endpoint = { url: financialPath, method: "POST" };
    JSONBody = JSONBodyBuilder.buildBody(endpoint, bodyData);
  });

  it("should return a proper JSON Body on success", () => {
    expect(typeof JSONBody).toEqual("object");
    expect(JSONBody).not.toEqual({});
    expect(JSONBody).not.toContain("string");
    expect(Object.keys(JSONBody).length).toBeGreaterThan(0);
    expect(Object.keys(JSONBody)).toContain("documents");
  }, 60000);

  it("should throw no endpointdata error if incorrect path provided", () => {
    const otherEndpoint: Endpoint = { url: "wrongurlhahaha", method: "POST" };
    expect(() => {
      JSONBodyBuilder.buildBody(otherEndpoint, { documents: {} });
    }).toThrow(/^No EndpointData could be found!$/);
  }, 60000);

  test("that no document provided error will not be thrown if there is data field in the bodyData provided", () => {
    expect(() => {
      JSONBodyBuilder.buildBody(endpoint, { documents: { data: "somedata" } });
    }).not.toThrow(/^No document provided!$/);
  }, 60000);
});
