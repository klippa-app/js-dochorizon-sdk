import { getSwagger } from "../../getSwagger";
import * as fs from "fs";

describe("Get Swagger Tests", () => {
  beforeAll(async() => await getSwagger({ useTestUrl: true }), 60000000);
  afterAll(() => fs.unlinkSync(`${__dirname}/../../api_test.json`));

  const yamlPath = `${__dirname}/../../swaggerData.yaml`;
  const swaggerPath = `${__dirname}/../../api_test.json`;

  test("that YAML file does not exist", () => {
    const yamlExists = fs.existsSync(yamlPath);
    expect(yamlExists).toBeFalsy();
  }, 60000);

  test("that JSON File exists", () => {
    const swagExists = fs.existsSync(swaggerPath);
    expect(swagExists).toBeTruthy();
  }, 60000);

  test("that the json is not 404", () => {
    const string404 = `"404 page not found"`;
    const fileContents = fs.readFileSync(swaggerPath, "utf-8");

    expect(fileContents).not.toEqual(string404);
  }, 60000);
});
