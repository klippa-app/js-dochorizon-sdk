const https = require('https');
const fs = require('fs');
const yaml = require('js-yaml');

const sourceUrls = {
    apiSpec: 'https://test.dochorizon.klippa.com/api/open-api.yaml'
}

const filePaths = {
    'apiYaml': `${__dirname}/swaggerData.yaml`,
    'apiJson': `${__dirname}/api.json`,
    'apiJsonTest': `${__dirname}/api_test.json`
}

interface SwaggerOptions {
    useTestUrl?: boolean;
}


/*
Method that gets the open api spec and turns it into a json
in the future this json will be used for gathering info about endpoints
getting the right schemas to create post payloads, etc.
 */
export async function getSwagger(options: SwaggerOptions = { useTestUrl: false }){

    const { useTestUrl } = options;

    return new Promise<void>((resolve) => https.get(sourceUrls.apiSpec, (res: any) => {
        // create write stream for yaml file
        const yamlData = fs.createWriteStream(filePaths.apiYaml);

        //pipe all results to the yaml file
        res.pipe(yamlData);

        yamlData.on('finish', () => {
            yamlData.close();

            //create JSON and convert the YAML to JSON
            const obj = yaml.load(fs.readFileSync(filePaths.apiYaml), 'utf-8');
            const path = useTestUrl ? filePaths.apiJsonTest : filePaths.apiJson;
            fs.writeFileSync(path, JSON.stringify(obj, null, 2));

            //then, remove the yaml file (cleanup)
            fs.unlinkSync(filePaths.apiYaml);
            resolve();
        });
    }));
}

const useTestUrl = (process.argv[2] === "true");
getSwagger({useTestUrl}).finally(() => console.log("done!"));
