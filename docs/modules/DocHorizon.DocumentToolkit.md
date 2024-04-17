[@klippa/dochorizon-sdk](../README.md) / [Exports](../modules.md) / [DocHorizon](DocHorizon.md) / DocumentToolkit

# Namespace: DocumentToolkit

[DocHorizon](DocHorizon.md).DocumentToolkit

DocumentToolkit Service

## Table of contents

### Functions

- [getMergedResults](DocHorizon.DocumentToolkit.md#getmergedresults)
- [getRenderedImage](DocHorizon.DocumentToolkit.md#getrenderedimage)
- [getSplitDocumentsList](DocHorizon.DocumentToolkit.md#getsplitdocumentslist)
- [info](DocHorizon.DocumentToolkit.md#info)
- [merge](DocHorizon.DocumentToolkit.md#merge)
- [render](DocHorizon.DocumentToolkit.md#render)
- [split](DocHorizon.DocumentToolkit.md#split)

## Functions

### getMergedResults

▸ **getMergedResults**(`res`): `Promise`\<`string`\>

Get the results of a merge operation in the form of actual filedata

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `res` | [`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md) | A DocHorizonResponse type, from the merge operation of the document toolkit |

#### Returns

`Promise`\<`string`\>

a base64 data string of the merged result

**`See`**

[DocHorizonResponse](../interfaces/internal_.DocHorizonResponse.md)

#### Defined in

[src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.service.ts:94](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.service.ts#L94)

___

### getRenderedImage

▸ **getRenderedImage**(`res`, `index?`): `Promise`\<`string`\>

Get image data out of a render operation result

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `res` | [`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md) | The DocHorizonResponse from the Render Function |
| `index?` | `number` | an optional value to indicate which image you would like to get, if there are multile pages/images. If this is not given the first image will always be retrieved |

#### Returns

`Promise`\<`string`\>

a string containing image data

**`See`**

 - [render](DocHorizon.DocumentToolkit.md#render)
 - [DocHorizonResponse](../interfaces/internal_.DocHorizonResponse.md)

#### Defined in

[src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.service.ts:192](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.service.ts#L192)

___

### getSplitDocumentsList

▸ **getSplitDocumentsList**(`res`): `Promise`\<`string`[]\>

Get file data OR file ids of the results of a Document Toolkit Split operation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `res` | [`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md) | the DocHorizonResponse result of a split operation |

#### Returns

`Promise`\<`string`[]\>

a list of strings, either in the form of file data or file ids, for the result of
the split operation

**`See`**

 - [split](DocHorizon.DocumentToolkit.md#split)
 - [DocHorizonResponse](../interfaces/internal_.DocHorizonResponse.md)

#### Defined in

[src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.service.ts:221](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.service.ts#L221)

___

### info

▸ **info**(`src`): `Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

Obtain information about a provided document

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `string` \| [`DocHorizonDocument`](../interfaces/internal_.DocHorizonDocument.md) | the document in the form of a DocHorizonDocument object, or a string |

#### Returns

`Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

a DocHorizonResponse containing response data from the Document Toolkit Info endpoint

**`See`**

 - [DocHorizonDocument](../interfaces/internal_.DocHorizonDocument.md)
 - [DocHorizonResponse](../interfaces/internal_.DocHorizonResponse.md)

#### Defined in

[src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.service.ts:46](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.service.ts#L46)

___

### merge

▸ **merge**(`src`, `options?`): `Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

Merge multiple documents into one

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `string`[] \| [`DocHorizonDocument`](../interfaces/internal_.DocHorizonDocument.md)[] | A list of strings or a list of DocHorizonDocument objects |
| `options?` | [`MergeOptions`](../interfaces/internal_.MergeOptions.md) | an object containing merge options |

#### Returns

`Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

**`See`**

 - [DocHorizonDocument](../interfaces/internal_.DocHorizonDocument.md)
 - [MergeOptions](../interfaces/internal_.MergeOptions.md)

#### Defined in

[src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.service.ts:66](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.service.ts#L66)

___

### render

▸ **render**(`src`, `options`): `Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

Render a document as an image

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `string` \| [`DocHorizonDocument`](../interfaces/internal_.DocHorizonDocument.md) | either a string indicating a document, or a DocHorizonDocument |
| `options` | [`RenderOptions`](../interfaces/internal_.RenderOptions.md) | an object containing options for the render operation |

#### Returns

`Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

**`See`**

 - [DocHorizonDocument](../interfaces/internal_.DocHorizonDocument.md)
 - [RenderOptions](../interfaces/internal_.RenderOptions.md)

#### Defined in

[src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.service.ts:146](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.service.ts#L146)

___

### split

▸ **split**(`src`, `options?`): `Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

Split a file into multiple files

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `string` \| [`DocHorizonDocument`](../interfaces/internal_.DocHorizonDocument.md) | either a string indicating a document, or a DocHorizonDocument |
| `options?` | [`SplitOptions`](internal_.md#splitoptions) | an object containing options in regards to the splitting proces |

#### Returns

`Promise`\<[`DocHorizonResponse`](../interfaces/internal_.DocHorizonResponse.md)\>

**`See`**

[SplitOptions](internal_.md#splitoptions)

#### Defined in

[src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.service.ts:114](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.service.ts#L114)
