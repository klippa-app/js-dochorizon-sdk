[@klippa/dochorizon-sdk](../README.md) / [Exports](../modules.md) / [DocHorizon](DocHorizon.md) / Capturing

# Namespace: Capturing

[DocHorizon](DocHorizon.md).Capturing

Capturing Service

## Table of contents

### Functions

- [getListOfEnabledCapturingModels](DocHorizon.Capturing.md#getlistofenabledcapturingmodels)
- [listEnabledModels](DocHorizon.Capturing.md#listenabledmodels)

## Functions

### getListOfEnabledCapturingModels

▸ **getListOfEnabledCapturingModels**(): `Promise`\<`string`[]\>

Get a list of all enabled capturing models for this API key

#### Returns

`Promise`\<`string`[]\>

a list of strings containing the enabled capturing models for the used
API key

#### Defined in

[src/ApiCommunicationsWrapper/Services/DocumentCapturing/Capturing.service.ts:36](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/DocumentCapturing/Capturing.service.ts#L36)

___

### listEnabledModels

▸ **listEnabledModels**(): `Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

Get all enabled capturing models for this API key

#### Returns

`Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

a DocHorizonResponse containing the enabled capturing models for the used API key

**`See`**

[DocHorizonResponse](../interfaces/internal_.DocHorizonResponse.md)

#### Defined in

[src/ApiCommunicationsWrapper/Services/DocumentCapturing/Capturing.service.ts:21](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/DocumentCapturing/Capturing.service.ts#L21)
