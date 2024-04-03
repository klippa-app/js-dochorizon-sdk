import { DocHorizon } from "../../../../index";
import {
  getApiKeyFromEnv,
  unpackAsyncPostResult,
} from "../../../testFunctionUtils";
import { DocHorizonResponse } from "../../../../src/ApiCommunicationsWrapper/Types/ApiTypes";
import { PROMPT_JOB, PROMPT_SLUG, TEST_TIMEOUT } from "../../../testVariables";

describe("Prompt Service Tests", () => {
  const base64Data: string = "test/testFiles/testpdf.pdf";
  let prompt_slug: string;
  let prompt_job: string;
  
  beforeAll(() => {
    DocHorizon.authenticate(getApiKeyFromEnv());
    prompt_slug = "";
    prompt_job = "";
    if(PROMPT_SLUG !== undefined) {
      prompt_slug = PROMPT_SLUG;
    }
    if(PROMPT_JOB !== undefined) {
      prompt_job = PROMPT_JOB;
    }
  });

  test(
    "That the prompt capture function works correctly",
    async () => {
      const result: DocHorizonResponse = await DocHorizon.Prompt.capture(
        base64Data,
        prompt_slug,
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
        prompt_slug,
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
        await DocHorizon.Prompt.getAsyncStatus(prompt_slug, prompt_job);

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
        await DocHorizon.Prompt.getLogsOfAsyncJob(prompt_slug, prompt_job);

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
        prompt_slug,
      );
      const job_id: string = unpackAsyncPostResult(result);

      const removeResult: DocHorizonResponse =
        await DocHorizon.Prompt.removeAsyncJob(prompt_slug, job_id);

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
        await DocHorizon.Prompt.getAsyncJobs(prompt_slug);

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
        await DocHorizon.Prompt.getListOfJobIds(prompt_slug);

      expect(Array.isArray(jobs)).toBeTruthy();
      expect(jobs.length).toBeGreaterThan(0);
    },
    TEST_TIMEOUT,
  );

  test(
    "That the getJsonSchema function works correctly",
    async () => {
      const schema: DocHorizonResponse =
        await DocHorizon.Prompt.getJsonSchema(prompt_slug);

      expect(schema.httpCode).toEqual(200);
      expect(schema.docHorizonData.result).toBeDefined();
      expect(schema.docHorizonData.result).toEqual("success");
    },
    TEST_TIMEOUT,
  );
});
