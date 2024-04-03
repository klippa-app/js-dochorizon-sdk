import { FinancialService } from "../../src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.service";
import {STORAGE_ID, TEST_TIMEOUT, TEST_TIMEOUT_LOCAL} from "../testVariables";
import { DocHorizon } from "../../index";
import { getApiKeyFromEnv } from "../testFunctionUtils";
import { DocHorizonResponse } from "../../src/ApiCommunicationsWrapper/Types/ApiTypes";
import { DocHorizonDocument } from "../../src/ApiCommunicationsWrapper/Types/UserOptionsTypes";
import { APIFunctionalities } from "../../src/ApiCommunicationsWrapper/Services/APIFunctions";
import unpackDocHorizonData = APIFunctionalities.unpackDocHorizonData;

describe("CAPTURE FINANCIAL DOCUMENT TESTS", () => {
  const base64Data: string = "test/testFiles/testpdf.pdf";
  const wrongDoc: string = "test/testFiles/somedoc.txt";
  let docHorizonStorageId: string = '';
  const document: DocHorizonDocument = {
    data: base64Data,
    content_type: "application/json",
  };

  beforeAll(() => {
    DocHorizon.authenticate(getApiKeyFromEnv());
    if(STORAGE_ID !== undefined) {
      docHorizonStorageId = STORAGE_ID
    }
  });

  it(
    "should return a JSON object when doing a proper request to financial endpoint",
    async () => {
      const res: DocHorizonResponse =
        await FinancialService.capture(base64Data);
      expect(res.docHorizonData.result).toBeDefined();
      expect(res.docHorizonData.result).toEqual("success");
    },
    TEST_TIMEOUT,
  );

  it(
    "should have a success value in the result field if proper request is done with options",
    async () => {
      const res = await FinancialService.capture(document);
      expect(res.docHorizonData.result).toEqual("success");
    },
    TEST_TIMEOUT,
  );

  it(
    "should have an error value in the result field if improper request is done",
    async () => {
      const res = await FinancialService.capture(wrongDoc);
      expect(res.docHorizonData.result).toEqual("error");
    },
    TEST_TIMEOUT,
  );

  it(
    "should be succesful when supplying a dochorizon storage id instead of a data",
    async () => {
      const res = await FinancialService.capture(docHorizonStorageId);
      expect(res.docHorizonData.result).toEqual("success");
    },
    TEST_TIMEOUT,
  );

  it(
    "should be succesful when supplying a url instead of a data",
    async () => {
      const res = await FinancialService.capture(
        "https://test.dochorizon.klippa.com/docs/static/media/testpdf1.299c9695bc04907cf843.pdf",
      );
      expect(res.docHorizonData.result).toEqual("success");
    },
    TEST_TIMEOUT,
  );

  it(
    "should not have docHorizonData/httpCode once unpacked",
    async () => {
      const res: DocHorizonResponse = await FinancialService.capture(document);
      const unpacked = unpackDocHorizonData(res);

      expect(unpacked).not.toContain("docHorizonData");
      expect(unpacked).not.toContain("httpCode");
    },
    TEST_TIMEOUT,
  );
});
