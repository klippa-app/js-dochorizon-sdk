[@klippa/dochorizon-sdk](../README.md) / [Exports](../modules.md) / [DocHorizon](DocHorizon.md) / Financial

# Namespace: Financial

[DocHorizon](DocHorizon.md).Financial

Financial Service

## Table of contents

### Functions

- [capture](DocHorizon.Financial.md#capture)
- [captureAsync](DocHorizon.Financial.md#captureasync)
- [getAsyncJobs](DocHorizon.Financial.md#getasyncjobs)
- [getAsyncStatus](DocHorizon.Financial.md#getasyncstatus)
- [getEnabledComponentsFromPreset](DocHorizon.Financial.md#getenabledcomponentsfrompreset)
- [getListOfJobIds](DocHorizon.Financial.md#getlistofjobids)
- [getLogsOfAsyncJob](DocHorizon.Financial.md#getlogsofasyncjob)
- [getPresetList](DocHorizon.Financial.md#getpresetlist)
- [getPresets](DocHorizon.Financial.md#getpresets)
- [getResultsOfAsyncJob](DocHorizon.Financial.md#getresultsofasyncjob)
- [removeAsyncJob](DocHorizon.Financial.md#removeasyncjob)

## Functions

### capture

▸ **capture**(`src`, `options?`): `Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

Capture data from a document using the financial model

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `string` \| `string`[] \| [`DocHorizonDocument`](internal_.md#dochorizondocument) \| [`DocHorizonDocument`](internal_.md#dochorizondocument)[] | either a string indicating a document, or a DocHorizonDocument |
| `options?` | [`FinancialOptions`](internal_.md#financialoptions) | an object containing any financial options to send with the request |

#### Returns

`Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

a DocHorizonResponse containing the results from the financial document capturer

**`See`**

 - [DocHorizonDocument](internal_.md#dochorizondocument)
 - [FinancialOptions](internal_.md#financialoptions)
 - [DocHorizonResponse](../interfaces/internal_.DocHorizonResponse.md)

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.service.ts:143](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.service.ts#L143)

___

### captureAsync

▸ **captureAsync**(`src`, `options?`): `Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

Capture data from a financial document asynchronously

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `string` \| `string`[] \| [`DocHorizonDocument`](internal_.md#dochorizondocument) \| [`DocHorizonDocument`](internal_.md#dochorizondocument)[] | either a string indicating a document, or a DocHorizonDocument |
| `options?` | [`FinancialAsyncOptions`](internal_.md#financialasyncoptions) | an object containing any financial async options to send with the request |

#### Returns

`Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

**`See`**

 - [DocHorizonDocument](internal_.md#dochorizondocument)
 - [FinancialAsyncOptions](internal_.md#financialasyncoptions)

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.service.ts:174](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.service.ts#L174)

___

### getAsyncJobs

▸ **getAsyncJobs**(): `Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

Get all existing financial async jobs for the used API key

#### Returns

`Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

a DocHorizonResponse containing all found financial async jobs

**`See`**

[DocHorizonResponse](../interfaces/internal_.DocHorizonResponse.md)

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.service.ts:222](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.service.ts#L222)

___

### getAsyncStatus

▸ **getAsyncStatus**(`job_id`): `Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

Get the status of a financial async job

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

[src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.service.ts:202](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.service.ts#L202)

___

### getEnabledComponentsFromPreset

▸ **getEnabledComponentsFromPreset**(`preset`): `Promise`\<`string`[]\>

function that returns the enabled components from a given preset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `preset` | `string` | string indicating which preset to get enabled components from |

#### Returns

`Promise`\<`string`[]\>

list of enabled components for the preset

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.service.ts:111](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.service.ts#L111)

___

### getListOfJobIds

▸ **getListOfJobIds**(`status?`): `Promise`\<`string`[]\>

Get a list of all existing financial async jobs for the used API key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `status?` | [`AsyncStatus`](internal_.md#asyncstatus) | an optional status to filter the results on |

#### Returns

`Promise`\<`string`[]\>

a list containing all found financial async job ids

**`See`**

 - [AsyncStatus](internal_.md#asyncstatus) for the available statusses
 - [DocHorizonResponse](../interfaces/internal_.DocHorizonResponse.md)

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.service.ts:241](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.service.ts#L241)

___

### getLogsOfAsyncJob

▸ **getLogsOfAsyncJob**(`job_id`): `Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

Get logs of a financial async job

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `job_id` | `string` | The job id of which you want to obtain logs |

#### Returns

`Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

DocHorizonResponse data containing found logs for the provided job id

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.service.ts:270](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.service.ts#L270)

___

### getPresetList

▸ **getPresetList**(): `Promise`\<`string`[]\>

function that returns a lis the created financial presets for the provided API key

#### Returns

`Promise`\<`string`[]\>

a list of found preset strings for the provided API key

**`See`**

[DocHorizonResponse](../interfaces/internal_.DocHorizonResponse.md)

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.service.ts:94](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.service.ts#L94)

___

### getPresets

▸ **getPresets**(): `Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

function that returns the created financial presets for the provided API key

#### Returns

`Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

a DocHorizonResponse containing found presets for the provided api key

**`See`**

[DocHorizonResponse](../interfaces/internal_.DocHorizonResponse.md)

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.service.ts:79](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.service.ts#L79)

___

### getResultsOfAsyncJob

▸ **getResultsOfAsyncJob**(`job_id`): `Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

Get results of a financial async job

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `job_id` | `string` | The id of the job which you want to get the results from |

#### Returns

`Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

a DocHorizonResponse containing results from the financial capturer

**`See`**

[DocHorizonResponse](../interfaces/internal_.DocHorizonResponse.md)

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.service.ts:289](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.service.ts#L289)

___

### removeAsyncJob

▸ **removeAsyncJob**(`job_id`): `Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

Remove a financial async job

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

[src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.service.ts:252](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.service.ts#L252)
