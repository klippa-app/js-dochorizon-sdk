[@klippa/dochorizon-sdk](../README.md) / [Exports](../modules.md) / [DocHorizon](DocHorizon.md) / Storage

# Namespace: Storage

[DocHorizon](DocHorizon.md).Storage

Storage Service

## Table of contents

### Functions

- [saveToStorage](DocHorizon.Storage.md#savetostorage)

## Functions

### saveToStorage

▸ **saveToStorage**(`src`): `Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

Save a file to DocHorizon storage

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `string` \| [`DocHorizonDocument`](../interfaces/internal_.DocHorizonDocument.md) | either a string indicating a document, or a DocHorizonDocument |

#### Returns

`Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

a DocHorizonResponse indicating whether a file has been succesfully saved

**`See`**

 - [DocHorizonDocument](../interfaces/internal_.DocHorizonDocument.md)
 - [DocHorizonResponse](../interfaces/internal_.DocHorizonResponse.md)

#### Defined in

[src/ApiCommunicationsWrapper/Services/Storage/Storage.service.ts:25](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/Storage/Storage.service.ts#L25)
