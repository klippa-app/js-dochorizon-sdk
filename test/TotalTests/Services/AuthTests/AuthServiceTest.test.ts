import { getApiKeyFromEnv } from "../../../testFunctionUtils";
import { DocHorizon } from "../../../../index";
import { DocHorizonResponse } from "../../../../src/ApiCommunicationsWrapper/Types/ApiTypes";
import { TEST_TIMEOUT } from "../../../testVariables";

describe("Auth Service Tests", () => {
  beforeAll(() => {
    DocHorizon.authenticate(getApiKeyFromEnv());
  });

  test(
    "That the getApiKeyInfo function works correctly",
    async () => {
      const result: DocHorizonResponse = await DocHorizon.Auth.getApiKeyInfo();

      expect(result.httpCode).toEqual(200);
      expect(result.docHorizonData.result).toBeDefined();
      expect(result.docHorizonData.result).toEqual("success");
    },
    TEST_TIMEOUT,
  );
});
