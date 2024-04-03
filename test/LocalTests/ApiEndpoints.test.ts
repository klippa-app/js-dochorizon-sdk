import {
  DocHorizonResponse,
  Endpoint,
} from "../../src/ApiCommunicationsWrapper/Types/ApiTypes";
import { JSONBodyBuilder } from "../../src/ApiCommunicationsWrapper/JSONBodyBuilder";
import { TEST_TIMEOUT } from "../testVariables";
import fs from "fs";
import { getApiKeyFromEnv } from "../testFunctionUtils";
import { DocHorizonRequestData } from "../../src/ApiCommunicationsWrapper/Types/UserOptionsTypes";
import { APIFunctionalities } from "../../src/ApiCommunicationsWrapper/Services/APIFunctions";

describe("API Endpoints Tests (requests)", () => {
  const api_key = getApiKeyFromEnv();
  const financialPath = "/api/services/document_capturing/v1/financial";
  const base64Data = fs.readFileSync(`test/testFiles/document.txt`, "utf-8");
  const bodyData: DocHorizonRequestData = { documents: [{ data: base64Data }] };
  const endpoint: Endpoint = { method: "POST", url: financialPath };

  beforeAll(() => {
    APIFunctionalities.initAPI(api_key);
  });

  it(
    "should be able to do a succesful API call",
    async () => {
      const JSONBody = JSONBodyBuilder.buildBody(endpoint, bodyData);
      const res: DocHorizonResponse = await APIFunctionalities.request({
        endpoint,
        body: JSONBody,
      });

      expect(Object.keys(res).length).toBeGreaterThan(0);
      expect(Object.keys(res)).toContain("docHorizonData");
      expect(Object.keys(res)).toContain("httpCode");
      expect(res.httpCode).toEqual(200);
    },
    TEST_TIMEOUT,
  );

  it(
    "should return a 400 when an improper JSON is sent",
    async () => {
      const res = await APIFunctionalities.request({ endpoint, body: {} });

      expect(res.httpCode).toEqual(400);
    },
    TEST_TIMEOUT,
  );

  it(
    "should return a 400 when an improper file id is supplied",
    async () => {
      const res: DocHorizonResponse = await APIFunctionalities.request({
        endpoint,
        body: { file_id: "wrong_id" },
      });

      expect(res.httpCode).toEqual(400);
    },
    TEST_TIMEOUT,
  );

  it(
    "should return a 400 when an improper url document is supplied",
    async () => {
      const res: DocHorizonResponse = await APIFunctionalities.request({
        endpoint,
        body: { url: "wrong_url" },
      });

      expect(res.httpCode).toEqual(400);
    },
    TEST_TIMEOUT,
  );

  it(
    "should return a 403 when a wrong api-key is given",
    async () => {
      APIFunctionalities.initAPI("wrongkey");
      const res = await APIFunctionalities.request({ endpoint, body: {} });
      expect(res.httpCode).toEqual(403);
    },
    TEST_TIMEOUT,
  );
});
