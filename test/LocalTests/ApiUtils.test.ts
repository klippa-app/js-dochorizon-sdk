import { APIFunctionalities } from "../../src/ApiCommunicationsWrapper/Services/APIFunctions";
import fs from "fs";
import fileToBase64 = APIFunctionalities.fileToBase64;

describe("API UTILS TESTS", () => {
  const documentPath = "test/testFiles/testpdf.pdf";
  const document2Path = "test/testFiles/testpdf2.pdf";
  let documentResult = "";
  let secondDocumentResult = "";
  let properResult = fs.readFileSync("test/testFiles/document.txt", "utf-8");

  beforeAll(() => {
    documentResult = fileToBase64(documentPath);
    secondDocumentResult = fileToBase64(document2Path);
  });

  it("should error if a wrong file path is provided", () => {
    const wrongPath = "wrong/path.pdf";
    expect(() => {
      fileToBase64(wrongPath);
    }).toThrow(/^ENOENT: no such file or directory, open 'wrong\/path.pdf'$/);
  });

  it("should return a string", () => {
    expect(typeof documentResult).toEqual("string");
  });

  it("should equal the expected result", () => {
    expect(documentResult).toEqual(properResult);
  });

  it("should end in == for the second pdf (because of line break)", () => {
    expect(
      secondDocumentResult.substring(secondDocumentResult.length - 2),
    ).toEqual("==");
  });

  it("should not end in == for the first pdf", () => {
    expect(documentResult.substring(documentResult.length - 2)).not.toEqual(
      "==",
    );
  });
});
