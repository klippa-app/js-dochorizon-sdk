import { getSwagger } from "../../getSwagger";
import * as fs from "fs";

describe("Get Swagger Tests", () => {
  beforeAll(() => getSwagger({ useTestUrl: true }));
  afterAll(() => fs.unlinkSync(`${__dirname}/../../api_test.json`));

  const yamlPath = `${__dirname}/../../swaggerData.yaml`;
  const swaggerPath = `${__dirname}/../../api_test.json`;

  test("that YAML file does not exist", () => {
    const yamlExists = fs.existsSync(yamlPath);
    expect(yamlExists).toBeFalsy();
  });

  test("that JSON File exists", () => {
    const swagExists = fs.existsSync(swaggerPath);
    expect(swagExists).toBeTruthy();
  });

  test("that the json is not 404", () => {
    const string404 = `"404 page not found"`;
    const fileContents = fs.readFileSync(swaggerPath, "utf-8");

    expect(fileContents).not.toEqual(string404);
  });
});
