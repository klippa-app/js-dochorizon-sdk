import { DocHorizonDocument } from "../../src/ApiCommunicationsWrapper/Types/UserOptionsTypes";
import { DocHorizon } from "../../index";
import { PROMPT_JOB, PROMPT_SLUG, TEST_TIMEOUT } from "../testVariables";
import { PromptBuilderService } from "../../src/ApiCommunicationsWrapper/Services/Capturing/PromptBuilder/PromptBuilder.service";
import { getApiKeyFromEnv } from "../testFunctionUtils";
import { AsyncJobCreationResult } from "../../src/ApiCommunicationsWrapper/Services/Capturing/Async.types";
import { AsyncService } from "../../src/ApiCommunicationsWrapper/Services/Capturing/Async.service";
import unpackAsyncPostResult = AsyncService.unpackAsyncPostResult;

describe("Async Services Test", () => {
  const document: DocHorizonDocument = {
    data: "test/testFiles/testpdf.pdf",
  };
  
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

  it(
    "should return a proper option upon providing the required information",
    async () => {
      const res = await PromptBuilderService.captureAsync(
        document,
        prompt_slug,
      );
      const unpacked: AsyncJobCreationResult | undefined =
        unpackAsyncPostResult(res);

      if (unpacked) {
        expect(unpacked.job_id).toBeDefined();
      }
    },
    TEST_TIMEOUT,
  );

  it(
    "should return a proper result upon doing a get request for status",
    async () => {
      const res = await PromptBuilderService.getAsyncStatus(
        prompt_slug,
        prompt_job,
      );
      expect(res.httpCode).toEqual(200);
      expect(res.docHorizonData.result).toEqual("success");
      expect(res.docHorizonData.data).toBeDefined();
    },
    TEST_TIMEOUT,
  );

  it(
    "should return a proper result when adding webhook data to the request",
    async () => {
      const res = await PromptBuilderService.captureAsync(
        document,
        prompt_slug,
        {
          webhook: { url: "https://someurl.com", types: "on_finish" },
        },
      );
      expect(res.httpCode).toEqual(200);
      expect(res.docHorizonData.result).toEqual("success");
      expect(res.docHorizonData.data).toBeDefined();
    },
    TEST_TIMEOUT,
  );
});
