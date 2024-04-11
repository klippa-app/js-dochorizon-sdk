@klippa/dochorizon-sdk / [Exports](modules.md)

# NodeJSSDK
This is the Node JS Developer SDK for DocHorizon.
The SDK offers multiple functions for accessing our API services within
your own application.  
&emsp;

## DocHorizon API Key
To fully utilize this SDK you will need to authenticate using a DocHorizon API key.
If you are interested in our services but do not have an API key yet, feel free to contact us [here](https://klippa.com/en/contact-en)

&emsp;

## Installation
install the SDK using npm.

```npm install @klippa/dochorizon-sdk```

or

```npm i @klippa/dochorizon-sdk```

&emsp;

## Usage
1. Authenticate using your api-key as follows:
   ```DocHorizon.authenticate({your-api-key})```
2. capture a document using the financial model (example):
   ```DocHorizon.financial.capture({your-document})```
3. If at any point you want to unauthenticate, use the following:
   ```DocHorizon.unauthenticate()```

&emsp;  
This SDK is organized into various services and can be accessed using the following syntax:
```DocHorizon.{service}```. To use a specific function from a service, call upon
that function using the following syntax: ```DocHorizon.{service}.{function}```.    
&emsp;  
For a basic overview of provided services within this SDK, refer to the following section. For a
more complete overview of **all** services and their functions and options, consult to the official
[DocHorizon SDK documentation] (coming soon!)

&emsp;

### Provided Services
The following services are included in this SDK:

- **Auth**: Provides functions for retrieving information about the used API-key
- **Document** **Capturing**: Provides generic functions regarding capturing models
- **Document** **Toolkit**: Offers multiple function to get information from documents,
  merge documents, split documents, and render documents as images
- **Financial**: Provides functions for using the financial capturing model
- **Generic**: Provides functions for using the generic capturing model
- **Prompt** **Builder**: Offers functions for using the prompt builder capturing model
- **Storage**: Provides the ability to save a file to DocHorizon storage

&emsp;

## Support
If you encounter any issues, please don't hesitate to contact us [here](https://klippa.com/en/contact-en).  
Alternatively, you can refer to the DocHorizon documentation [here](https://dochorizon.klippa.com/docs).  
&emsp;

## License
The MIT License (MIT)

&emsp;
