import { FINANCIAL_JOB, TEST_TIMEOUT } from "../../../testVariables";
import { DocHorizonResponse } from "../../../../src/ApiCommunicationsWrapper/Types/ApiTypes";
import { DocHorizon } from "../../../../index";
import {
  getApiKeyFromEnv,
  unpackAsyncPostResult,
} from "../../../testFunctionUtils";

describe("Financial Service Tests", () => {
  const base64Data: string = "test/testFiles/testpdf.pdf";

  beforeAll(() => {
    DocHorizon.authenticate(getApiKeyFromEnv());
  });

  test(
    "That the parseFinancialOptions function works correctly",
    async () => {
      const result: DocHorizonResponse =
        await DocHorizon.Financial.capture(base64Data);

      expect(result.httpCode).toEqual(200);
      expect(result.docHorizonData.result).toBeDefined();
      expect(result.docHorizonData.result).toEqual("success");
    },
    TEST_TIMEOUT,
  );

  test(
    "That the getPresets function works correctly",
    async () => {
      const result: DocHorizonResponse =
        await DocHorizon.Financial.getPresets();

      expect(result.httpCode).toEqual(200);
      expect(result.docHorizonData.result).toBeDefined();
      expect(result.docHorizonData.result).toEqual("success");
    },
    TEST_TIMEOUT,
  );

  test(
    "That the getPresetList function works correctly",
    async () => {
      const result: string[] = await DocHorizon.Financial.getPresetList();

      expect(Array.isArray(result)).toBeTruthy();
      expect(result.length).toBeGreaterThan(0);
    },
    TEST_TIMEOUT,
  );

  test(
    "That the getEnabledComponentsFromPreset function works correctly",
    async () => {
      const result: string[] =
        await DocHorizon.Financial.getEnabledComponentsFromPreset("a_preset");

      expect(Array.isArray(result)).toBeTruthy();
      expect(result.length).toBeGreaterThan(0);
    },
    TEST_TIMEOUT,
  );

  test(
    "That the CaptureAsync function works correctly",
    async () => {
      const result: DocHorizonResponse =
        await DocHorizon.Financial.captureAsync(base64Data);

      expect(result.httpCode).toEqual(200);
      expect(result.docHorizonData.result).toBeDefined();
      expect(result.docHorizonData.result).toEqual("success");
    },
    TEST_TIMEOUT,
  );

  test(
    "That the getAsyncStatus function works correctly",
    async () => {
      const result: DocHorizonResponse =
        await DocHorizon.Financial.captureAsync(base64Data);
      const job_id: string = unpackAsyncPostResult(result);

      const statusResult: DocHorizonResponse =
        await DocHorizon.Financial.getAsyncStatus(job_id);

      expect(statusResult.httpCode).toEqual(200);
      expect(statusResult.docHorizonData.result).toBeDefined();
      expect(statusResult.docHorizonData.result).toEqual("success");
    },
    TEST_TIMEOUT,
  );

  test(
    "That the getLogsOfAsyncJob function works correctly",
    async () => {
      const result: DocHorizonResponse =
        await DocHorizon.Financial.captureAsync(base64Data);
      const job_id: string = unpackAsyncPostResult(result);

      const logsResult: DocHorizonResponse =
        await DocHorizon.Financial.getLogsOfAsyncJob(job_id);

      expect(logsResult.httpCode).toEqual(200);
      expect(logsResult.docHorizonData.result).toBeDefined();
      expect(logsResult.docHorizonData.result).toEqual("success");
    },
    TEST_TIMEOUT,
  );

  test(
    "That the removeAsyncJob function works correctly",
    async () => {
      const result: DocHorizonResponse =
        await DocHorizon.Financial.captureAsync(base64Data);
      const job_id: string = unpackAsyncPostResult(result);

      const removeResult: DocHorizonResponse =
        await DocHorizon.Financial.removeAsyncJob(job_id);

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
        await DocHorizon.Financial.getAsyncJobs();

      expect(jobs.httpCode).toEqual(200);
      expect(jobs.docHorizonData.result).toBeDefined();
      expect(jobs.docHorizonData.result).toEqual("success");
    },
    TEST_TIMEOUT,
  );

  test(
    "That the getListOfJobIds function works correctly",
    async () => {
      const jobs: string[] = await DocHorizon.Financial.getListOfJobIds();

      expect(Array.isArray(jobs)).toBeTruthy();
      expect(jobs.length).toBeGreaterThan(0);
    },
    TEST_TIMEOUT,
  );
});
