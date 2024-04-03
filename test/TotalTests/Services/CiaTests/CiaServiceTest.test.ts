import { getApiKeyFromEnv } from "../../../testFunctionUtils";
import { DocHorizon } from "../../../../index";
import { DocHorizonResponse } from "../../../../src/ApiCommunicationsWrapper/Types/ApiTypes";
import { CiaOptions } from "../../../../src/ApiCommunicationsWrapper/Services/CIA/CIA.types";
import { TEST_TIMEOUT } from "../../../testVariables";

 describe("Cia Service Tests", () => {
   beforeAll(() => {
     DocHorizon.authenticate(getApiKeyFromEnv());
   });
   
   test("that it prints something", () => {
      console.log('something')
   });
 })
//
//   test(
//     "That the cia search function works correctly",
//     async () => {
//       const options: CiaOptions = {
//         coc_number: "74785834",
//         country_code: "NL",
//         depth: "entity",
//       };
//       const result: DocHorizonResponse = await DocHorizon.Cia.search(options);
//
//       expect(result.httpCode).toEqual(200);
//       expect(result.docHorizonData.result).toBeDefined();
//       expect(result.docHorizonData.result).toEqual("success");
//     },
//     TEST_TIMEOUT,
//   );
// });
