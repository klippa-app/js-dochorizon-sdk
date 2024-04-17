[@klippa/dochorizon-sdk](../README.md) / [Exports](../modules.md) / [DocHorizon](DocHorizon.md) / Prompt

# Namespace: Prompt

[DocHorizon](DocHorizon.md).Prompt

Prompt Service

## Table of contents

### Functions

- [capture](DocHorizon.Prompt.md#capture)
- [captureAsync](DocHorizon.Prompt.md#captureasync)
- [getAsyncJobs](DocHorizon.Prompt.md#getasyncjobs)
- [getAsyncStatus](DocHorizon.Prompt.md#getasyncstatus)
- [getConfigurations](DocHorizon.Prompt.md#getconfigurations)
- [getConfigurationsList](DocHorizon.Prompt.md#getconfigurationslist)
- [getJsonSchema](DocHorizon.Prompt.md#getjsonschema)
- [getListOfJobIds](DocHorizon.Prompt.md#getlistofjobids)
- [getLogsOfAsyncJob](DocHorizon.Prompt.md#getlogsofasyncjob)
- [getResultsOfAsyncJob](DocHorizon.Prompt.md#getresultsofasyncjob)
- [removeAsyncJob](DocHorizon.Prompt.md#removeasyncjob)

## Functions

### capture

▸ **capture**(`src`, `slug`): `Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

Capture a document using a prompt builder configuration

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `string` \| `string`[] \| [`DocHorizonDocument`](../interfaces/internal_.DocHorizonDocument.md) \| [`DocHorizonDocument`](../interfaces/internal_.DocHorizonDocument.md)[] | the document in the form of a DocHorizonDocument object, or a string |
| `slug` | `string` | the slug of the prompt builder configuration to use |

#### Returns

`Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

DocHorizonResponse - A promise of type DocHorizonResponse

**`See`**

 - [DocHorizonDocument](../interfaces/internal_.DocHorizonDocument.md)
 - [DocHorizonResponse](../interfaces/internal_.DocHorizonResponse.md)

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/PromptBuilder/PromptBuilder.service.ts:41](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/Capturing/PromptBuilder/PromptBuilder.service.ts#L41)

___

### captureAsync

▸ **captureAsync**(`src`, `slug`, `options?`): `Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

Capture data from a document using a prompt configuration - async

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `string` \| `string`[] \| [`DocHorizonDocument`](../interfaces/internal_.DocHorizonDocument.md) \| [`DocHorizonDocument`](../interfaces/internal_.DocHorizonDocument.md)[] | the document to capture data from. Can be given in the form of a string or a DocHorizonDocument. [DocHorizonDocument](../interfaces/internal_.DocHorizonDocument.md). Multiple strings or DocHorizonDocument types can be given in the form of an array. |
| `slug` | `string` | slug of the prompt configuration to use |
| `options?` | [`AsyncOptions`](../interfaces/internal_.AsyncOptions.md) | Object of Asynchronous options |

#### Returns

`Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

Promise<DocHorizonResponse> - a promise of type DocHorizonResponse

**`See`**

 - [AsyncOptions](../interfaces/internal_.AsyncOptions.md)
 - [DocHorizonResponse](../interfaces/internal_.DocHorizonResponse.md)

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/PromptBuilder/PromptBuilder.service.ts:111](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/Capturing/PromptBuilder/PromptBuilder.service.ts#L111)

___

### getAsyncJobs

▸ **getAsyncJobs**(`slug`): `Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

Get all available prompt builder async jobs

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slug` | `string` | the slug of a prompt builder configuration to get async jobs of |

#### Returns

`Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

a DocHorizonResponse containing available prompt builder async jobs

**`See`**

[DocHorizonResponse](../interfaces/internal_.DocHorizonResponse.md)

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/PromptBuilder/PromptBuilder.service.ts:161](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/Capturing/PromptBuilder/PromptBuilder.service.ts#L161)

___

### getAsyncStatus

▸ **getAsyncStatus**(`slug`, `job_id`): `Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

Get the status of a prompt builder async job

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slug` | `string` | slug of the prompt builder configuration to get status information on |
| `job_id` | `string` | id of the job to get status information on |

#### Returns

`Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

a DocHorizonResponse containing found status information of the provided job id

**`See`**

[DocHorizonResponse](../interfaces/internal_.DocHorizonResponse.md)

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/PromptBuilder/PromptBuilder.service.ts:137](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/Capturing/PromptBuilder/PromptBuilder.service.ts#L137)

___

### getConfigurations

▸ **getConfigurations**(): `Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

Get the available prompt configurations for the used API key

#### Returns

`Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

Promise<DocHorizonResponse> - A promise of type DocHorizonResponse

**`See`**

[DocHorizonResponse](../interfaces/internal_.DocHorizonResponse.md)

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/PromptBuilder/PromptBuilder.service.ts:69](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/Capturing/PromptBuilder/PromptBuilder.service.ts#L69)

___

### getConfigurationsList

▸ **getConfigurationsList**(): `Promise`\<`string`[]\>

Get a list of available prompt builder configurations

#### Returns

`Promise`\<`string`[]\>

a list of prompt builder configuration strings

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/PromptBuilder/PromptBuilder.service.ts:263](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/Capturing/PromptBuilder/PromptBuilder.service.ts#L263)

___

### getJsonSchema

▸ **getJsonSchema**(`slug`): `Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

Get the JSON schema of a prompt configuration

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slug` | `string` | slug of the prompt configuration you wish to get the Json schema of |

#### Returns

`Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

Promise<DocHorizonResponse> - a promise of type DocHorizonResponse

**`See`**

[DocHorizonResponse](../interfaces/internal_.DocHorizonResponse.md)

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/PromptBuilder/PromptBuilder.service.ts:85](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/Capturing/PromptBuilder/PromptBuilder.service.ts#L85)

___

### getListOfJobIds

▸ **getListOfJobIds**(`slug`, `status?`): `Promise`\<`string`[]\>

Get all available prompt builder async jobs in the form of a list

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slug` | `string` | the slug of a prompt builder configuration to get async jobs of |
| `status?` | [`AsyncStatus`](internal_.md#asyncstatus) | optionally, provide a status to filter the results |

#### Returns

`Promise`\<`string`[]\>

a list of found job ids

**`See`**

[AsyncStatus](internal_.md#asyncstatus)

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/PromptBuilder/PromptBuilder.service.ts:182](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/Capturing/PromptBuilder/PromptBuilder.service.ts#L182)

___

### getLogsOfAsyncJob

▸ **getLogsOfAsyncJob**(`slug`, `job_id`): `Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

Get logs of a prompt builder async job

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slug` | `string` | the slug of a prompt builder configuration to remove the async job of |
| `job_id` | `string` | the id of a job to get logs of |

#### Returns

`Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

a DocHorizonResponse containing any found logs

**`See`**

[DocHorizonResponse](../interfaces/internal_.DocHorizonResponse.md)

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/PromptBuilder/PromptBuilder.service.ts:219](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/Capturing/PromptBuilder/PromptBuilder.service.ts#L219)

___

### getResultsOfAsyncJob

▸ **getResultsOfAsyncJob**(`slug`, `job_id`): `Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

Get results of a prompt builder async job

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slug` | `string` | the slug of the prompt builder configuration to get the results of |
| `job_id` | `string` | the id of a job to get results for |

#### Returns

`Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

a DocHorizonResponse containing results from the prompt builder capturer
deletion

**`See`**

[DocHorizonResponse](../interfaces/internal_.DocHorizonResponse.md)

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/PromptBuilder/PromptBuilder.service.ts:244](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/Capturing/PromptBuilder/PromptBuilder.service.ts#L244)

___

### removeAsyncJob

▸ **removeAsyncJob**(`slug`, `job_id`): `Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

Remove a prompt builder async job

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slug` | `string` | the slug of a prompt builder configuration to remove the async job of |
| `job_id` | `string` | the id of a job to remove |

#### Returns

`Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

a DocHorizonResponse containing information about the deletion

**`See`**

[DocHorizonResponse](../interfaces/internal_.DocHorizonResponse.md)

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/PromptBuilder/PromptBuilder.service.ts:196](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/Capturing/PromptBuilder/PromptBuilder.service.ts#L196)
