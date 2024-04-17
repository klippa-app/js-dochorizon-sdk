[@klippa/dochorizon-sdk](../README.md) / [Exports](../modules.md) / [DocHorizon](DocHorizon.md) / Generic

# Namespace: Generic

[DocHorizon](DocHorizon.md).Generic

Generic Service

## Table of contents

### Functions

- [capture](DocHorizon.Generic.md#capture)
- [captureAsync](DocHorizon.Generic.md#captureasync)
- [captureXlsx](DocHorizon.Generic.md#capturexlsx)
- [getAsyncJobs](DocHorizon.Generic.md#getasyncjobs)
- [getAsyncStatus](DocHorizon.Generic.md#getasyncstatus)
- [getListOfJobIds](DocHorizon.Generic.md#getlistofjobids)
- [getLogsOfAsyncJob](DocHorizon.Generic.md#getlogsofasyncjob)
- [getResultsOfAsyncJob](DocHorizon.Generic.md#getresultsofasyncjob)
- [removeAsyncJob](DocHorizon.Generic.md#removeasyncjob)

## Functions

### capture

▸ **capture**(`src`): `Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

Capture data from a document using the 'generic model'

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `string` \| `string`[] \| [`DocHorizonDocument`](../interfaces/internal_.DocHorizonDocument.md) \| [`DocHorizonDocument`](../interfaces/internal_.DocHorizonDocument.md)[] | either a string indicating a document, or a DocHorizonDocument |

#### Returns

`Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

a DocHorizonResponse containing the results from the generic document capturer

**`See`**

 - [DocHorizonDocument](../interfaces/internal_.DocHorizonDocument.md)
 - [DocHorizonResponse](../interfaces/internal_.DocHorizonResponse.md)

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Generic/Generic.service.ts:39](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/Capturing/Generic/Generic.service.ts#L39)

___

### captureAsync

▸ **captureAsync**(`src`, `options?`): `Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

Capture data from a document using the 'generic model' asynchronously

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `string` \| `string`[] \| [`DocHorizonDocument`](../interfaces/internal_.DocHorizonDocument.md) \| [`DocHorizonDocument`](../interfaces/internal_.DocHorizonDocument.md)[] | either a string indicating a document, or a DocHorizonDocument |
| `options?` | [`Omit`](internal_.md#omit)\<[`AsyncOptions`](../interfaces/internal_.AsyncOptions.md), ``"hitl"``\> | an object containing all asynchronous options, except for Hitl |

#### Returns

`Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

a DocHorizonResponse containing the results from the async generic document capturer

**`See`**

 - [DocHorizonDocument](../interfaces/internal_.DocHorizonDocument.md)
 - [AsyncOptions](../interfaces/internal_.AsyncOptions.md)
 - [DocHorizonResponse](../interfaces/internal_.DocHorizonResponse.md)

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Generic/Generic.service.ts:105](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/Capturing/Generic/Generic.service.ts#L105)

___

### captureXlsx

▸ **captureXlsx**(`src`, `options?`): `Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

Capture data from a document using the 'generic model' and get results back as an XLSX sheet

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `string` \| `string`[] \| [`DocHorizonDocument`](../interfaces/internal_.DocHorizonDocument.md) \| [`DocHorizonDocument`](../interfaces/internal_.DocHorizonDocument.md)[] | either a string indicating a document, or a DocHorizonDocument |
| `options?` | [`GenericXlsxOptions`](../interfaces/internal_.GenericXlsxOptions.md) | an object containing a field called 'output_target' which indicates whether to output the results as a 'Base64' string, or a DocHorizonStorage id |

#### Returns

`Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

a DocHorizonResponse containing the results from the generic document capturer

**`See`**

 - [DocHorizonDocument](../interfaces/internal_.DocHorizonDocument.md)
 - [GenericXlsxOptions](../interfaces/internal_.GenericXlsxOptions.md)
 - [DocHorizonResponse](../interfaces/internal_.DocHorizonResponse.md)

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Generic/Generic.service.ts:69](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/Capturing/Generic/Generic.service.ts#L69)

___

### getAsyncJobs

▸ **getAsyncJobs**(): `Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

Get all existing generic async jobs for the used API key

#### Returns

`Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

a DocHorizonResponse containing all found generic async jobs

**`See`**

[DocHorizonResponse](../interfaces/internal_.DocHorizonResponse.md)

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Generic/Generic.service.ts:148](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/Capturing/Generic/Generic.service.ts#L148)

___

### getAsyncStatus

▸ **getAsyncStatus**(`job_id`): `Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

Get the status of a generic async job

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `job_id` | `string` | The job id of which you want to get the status |

#### Returns

`Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

a DocHorizonResponse containing status information regarding the provided status

**`See`**

[DocHorizonResponse](../interfaces/internal_.DocHorizonResponse.md)

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Generic/Generic.service.ts:129](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/Capturing/Generic/Generic.service.ts#L129)

___

### getListOfJobIds

▸ **getListOfJobIds**(`status?`): `Promise`\<`string`[]\>

Get a list of all existing generic async jobs for the used API key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `status?` | [`AsyncStatus`](internal_.md#asyncstatus) | an optional status to filter the results on |

#### Returns

`Promise`\<`string`[]\>

a list containing all found generic async job ids

**`See`**

 - [AsyncStatus](internal_.md#asyncstatus) for the available statusses
 - [DocHorizonResponse](../interfaces/internal_.DocHorizonResponse.md)

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Generic/Generic.service.ts:167](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/Capturing/Generic/Generic.service.ts#L167)

___

### getLogsOfAsyncJob

▸ **getLogsOfAsyncJob**(`job_id`): `Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

Get logs of a generic async job

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `job_id` | `string` | The job id of which you want to obtain logs |

#### Returns

`Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

DocHorizonResponse data containing found logs for the provided job id

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Generic/Generic.service.ts:196](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/Capturing/Generic/Generic.service.ts#L196)

___

### getResultsOfAsyncJob

▸ **getResultsOfAsyncJob**(`job_id`): `Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

Get results of a generic async job

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `job_id` | `string` | The id of the job which you want to get the results from |

#### Returns

`Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

a DocHorizonResponse containing results from the generic capturer

**`See`**

[DocHorizonResponse](../interfaces/internal_.DocHorizonResponse.md)

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Generic/Generic.service.ts:215](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/Capturing/Generic/Generic.service.ts#L215)

___

### removeAsyncJob

▸ **removeAsyncJob**(`job_id`): `Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

Remove a generic async job

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `job_id` | `string` | the id of the job to delete |

#### Returns

`Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

a DocHorizonResponse containing information about the deletion

**`See`**

[DocHorizonResponse](../interfaces/internal_.DocHorizonResponse.md)

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Generic/Generic.service.ts:178](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/Capturing/Generic/Generic.service.ts#L178)
