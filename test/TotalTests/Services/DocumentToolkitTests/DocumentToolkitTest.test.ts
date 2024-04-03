import { getApiKeyFromEnv } from "../../../testFunctionUtils";
import { DocHorizon } from "../../../../index";
import { DocHorizonResponse } from "../../../../src/ApiCommunicationsWrapper/Types/ApiTypes";
import { TEST_TIMEOUT } from "../../../testVariables";

describe("Document Toolkit Tests", () => {
  const base64Data: string = "test/testFiles/testpdf.pdf";

  beforeAll(() => {
    DocHorizon.authenticate(getApiKeyFromEnv());
  });

  test(
    "That the info function works correctly",
    async () => {
      const result: DocHorizonResponse =
        await DocHorizon.DocumentToolkit.info(base64Data);

      expect(result.httpCode).toEqual(200);
      expect(result.docHorizonData.result).toBeDefined();
      expect(result.docHorizonData.result).toEqual("success");
    },
    TEST_TIMEOUT,
  );

  test(
    "That the merge function works correctly",
    async () => {
      const result: DocHorizonResponse = await DocHorizon.DocumentToolkit.merge(
        [base64Data, base64Data],
      );

      expect(result.httpCode).toEqual(200);
      expect(result.docHorizonData.result).toBeDefined();
      expect(result.docHorizonData.result).toEqual("success");
    },
    TEST_TIMEOUT,
  );

  test(
    "That the getMergedResults function works correctly",
    async () => {
      const merged: DocHorizonResponse = await DocHorizon.DocumentToolkit.merge(
        [base64Data, base64Data],
      );
      const result: string =
        await DocHorizon.DocumentToolkit.getMergedResults(merged);

      expect(typeof result).toEqual("string");
      expect(result).not.toEqual("");
    },
    TEST_TIMEOUT,
  );

  test(
    "That the split function works correctly",
    async () => {
      const merged: DocHorizonResponse = await DocHorizon.DocumentToolkit.merge(
        [base64Data, base64Data],
      );
      const mergedBase64: string =
        await DocHorizon.DocumentToolkit.getMergedResults(merged);
      const result: DocHorizonResponse =
        await DocHorizon.DocumentToolkit.split(mergedBase64);

      expect(result.httpCode).toEqual(200);
      expect(result.docHorizonData.result).toBeDefined();
      expect(result.docHorizonData.result).toEqual("success");
    },
    TEST_TIMEOUT,
  );

  test(
    "That the render function works correctly",
    async () => {
      const result: DocHorizonResponse =
        await DocHorizon.DocumentToolkit.render(base64Data, {
          renders: { height: 500 },
        });

      expect(result.httpCode).toEqual(200);
      expect(result.docHorizonData.result).toBeDefined();
      expect(result.docHorizonData.result).toEqual("success");
    },
    TEST_TIMEOUT,
  );

  test(
    "That the getRenderedImage function works correctly",
    async () => {
      const result: DocHorizonResponse =
        await DocHorizon.DocumentToolkit.render(base64Data, {
          renders: { height: 500 },
        });
      const renderedImage: string =
        await DocHorizon.DocumentToolkit.getRenderedImage(result);

      expect(typeof renderedImage).toEqual("string");
      expect(renderedImage).not.toEqual("");
    },
    TEST_TIMEOUT,
  );
});
