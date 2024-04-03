import { getApiKeyFromEnv } from "../../../testFunctionUtils";
import { DocHorizon } from "../../../../index";
import { DocHorizonResponse } from "../../../../src/ApiCommunicationsWrapper/Types/ApiTypes";
import { TEST_TIMEOUT } from "../../../testVariables";

describe("Capturing Service Tests", () => {
  beforeAll(() => {
    DocHorizon.authenticate(getApiKeyFromEnv());
  });

  test(
    "That the listEnabledModels function works correctly",
    async () => {
      const result: DocHorizonResponse =
        await DocHorizon.Capturing.listEnabledModels();

      expect(result.httpCode).toEqual(200);
      expect(result.docHorizonData.result).toBeDefined();
      expect(result.docHorizonData.result).toEqual("success");
    },
    TEST_TIMEOUT,
  );

  test(
    "That the getListOfEnabledModels function works correctly",
    async () => {
      const result: string[] =
        await DocHorizon.Capturing.getListOfEnabledCapturingModels();

      expect(Array.isArray(result)).toBeTruthy();
      expect(result.length).toBeGreaterThan(0);
    },
    TEST_TIMEOUT,
  );
});
