import { getApiKeyFromEnv } from "../../../testFunctionUtils";
import { DocHorizon } from "../../../../index";
import { DocHorizonResponse } from "../../../../src/ApiCommunicationsWrapper/Types/ApiTypes";
import { TEST_TIMEOUT } from "../../../testVariables";

describe("Storage Service Tests", () => {
  const base64Data: string = "test/testFiles/testpdf.pdf";
  beforeAll(() => {
    DocHorizon.authenticate(getApiKeyFromEnv());
  });

  test(
    "That the saveToStorage function works correctly",
    async () => {
      const result: DocHorizonResponse =
        await DocHorizon.Storage.saveToStorage(base64Data);

      expect(result.httpCode).toEqual(200);
      expect(result.docHorizonData.result).toBeDefined();
      expect(result.docHorizonData.result).toEqual("success");
    },
    TEST_TIMEOUT,
  );
});
