import { DocHorizon } from "../../../../index";
import {
  getApiKeyFromEnv,
  unpackAsyncPostResult,
} from "../../../testFunctionUtils";
import { DocHorizonResponse } from "../../../../src/ApiCommunicationsWrapper/Types/ApiTypes";
import { PROMPT_JOB, PROMPT_SLUG, TEST_TIMEOUT } from "../../../testVariables";

describe("Prompt Service Tests", () => {
  const base64Data: string = "test/testFiles/testpdf.pdf";

  beforeAll(() => {
    DocHorizon.authenticate(getApiKeyFromEnv());
  });

  test(
    "That the prompt capture function works correctly",
    async () => {
      const result: DocHorizonResponse = await DocHorizon.Prompt.capture(
        base64Data,
        PROMPT_SLUG,
      );

      expect(result.httpCode).toEqual(200);
      expect(result.docHorizonData.result).toBeDefined();
      expect(result.docHorizonData.result).toEqual("success");
    },
    TEST_TIMEOUT,
  );

  test(
    "That the getConfigurations function works correctly",
    async () => {
      const result: DocHorizonResponse =
        await DocHorizon.Prompt.getConfigurations();

      expect(result.httpCode).toEqual(200);
      expect(result.docHorizonData.result).toBeDefined();
      expect(result.docHorizonData.result).toEqual("success");
    },
    TEST_TIMEOUT,
  );

  test(
    "That the getConfigurationsList function works correctly",
    async () => {
      const result: string[] = await DocHorizon.Prompt.getConfigurationsList();

      expect(Array.isArray(result)).toBeTruthy();
      expect(result.length).toBeGreaterThan(0);
    },
    TEST_TIMEOUT,
  );

  test(
    "That the CaptureAsync function works correctly",
    async () => {
      const result: DocHorizonResponse = await DocHorizon.Prompt.captureAsync(
        base64Data,
        PROMPT_SLUG,
      );

      expect(result.httpCode).toEqual(200);
      expect(result.docHorizonData.result).toBeDefined();
      expect(result.docHorizonData.result).toEqual("success");
    },
    TEST_TIMEOUT,
  );

  test(
    "That the getAsyncStatus function works correctly",
    async () => {
      const statusResult: DocHorizonResponse =
        await DocHorizon.Prompt.getAsyncStatus(PROMPT_SLUG, PROMPT_JOB);

      expect(statusResult.httpCode).toEqual(200);
      expect(statusResult.docHorizonData.result).toBeDefined();
      expect(statusResult.docHorizonData.result).toEqual("success");
    },
    TEST_TIMEOUT,
  );

  test(
    "That the getLogsOfAsyncJob function works correctly",
    async () => {
      const logsResult: DocHorizonResponse =
        await DocHorizon.Prompt.getLogsOfAsyncJob(PROMPT_SLUG, PROMPT_JOB);

      expect(logsResult.httpCode).toEqual(200);
      expect(logsResult.docHorizonData.result).toBeDefined();
      expect(logsResult.docHorizonData.result).toEqual("success");
    },
    TEST_TIMEOUT,
  );

  test(
    "That the removeAsyncJob function works correctly",
    async () => {
      const result: DocHorizonResponse = await DocHorizon.Prompt.captureAsync(
        base64Data,
        PROMPT_SLUG,
      );
      const job_id: string = unpackAsyncPostResult(result);

      const removeResult: DocHorizonResponse =
        await DocHorizon.Prompt.removeAsyncJob(PROMPT_SLUG, job_id);

      expect(removeResult.httpCode).toEqual(200);
      expect(removeResult.docHorizonData.result).toBeDefined();
      expect(removeResult.docHorizonData.result).toEqual("success");
    },
    TEST_TIMEOUT,
  );

  test(
    "That the getAsyncJobs function works correctly",
    async () => {
      const jobs: DocHorizonResponse =
        await DocHorizon.Prompt.getAsyncJobs(PROMPT_SLUG);

      expect(jobs.httpCode).toEqual(200);
      expect(jobs.docHorizonData.result).toBeDefined();
      expect(jobs.docHorizonData.result).toEqual("success");
    },
    TEST_TIMEOUT,
  );

  test(
    "That the getListOfJobIds function works correctly",
    async () => {
      const jobs: string[] =
        await DocHorizon.Prompt.getListOfJobIds(PROMPT_SLUG);

      expect(Array.isArray(jobs)).toBeTruthy();
      expect(jobs.length).toBeGreaterThan(0);
    },
    TEST_TIMEOUT,
  );

  test(
    "That the getJsonSchema function works correctly",
    async () => {
      const schema: DocHorizonResponse =
        await DocHorizon.Prompt.getJsonSchema(PROMPT_SLUG);

      expect(schema.httpCode).toEqual(200);
      expect(schema.docHorizonData.result).toBeDefined();
      expect(schema.docHorizonData.result).toEqual("success");
    },
    TEST_TIMEOUT,
  );
});
