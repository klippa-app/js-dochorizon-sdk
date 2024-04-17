[@klippa/dochorizon-sdk](../README.md) / [Exports](../modules.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Interfaces

- [ApiResponseData](../interfaces/internal_.ApiResponseData.md)
- [Assignment](../interfaces/internal_.Assignment.md)
- [Assignments](../interfaces/internal_.Assignments.md)
- [AsyncJobList](../interfaces/internal_.AsyncJobList.md)
- [AsyncOptions](../interfaces/internal_.AsyncOptions.md)
- [AsyncPostResult](../interfaces/internal_.AsyncPostResult.md)
- [Authorization\_header](../interfaces/internal_.Authorization_header.md)
- [Basic\_auth](../interfaces/internal_.Basic_auth.md)
- [CustomHeaderItem](../interfaces/internal_.CustomHeaderItem.md)
- [DocHorizonDocument](../interfaces/internal_.DocHorizonDocument.md)
- [DocHorizonResponse](../interfaces/internal_.DocHorizonResponse.md)
- [Document](../interfaces/internal_.Document.md)
- [Documents](../interfaces/internal_.Documents.md)
- [FinancialAsyncOptions](../interfaces/internal_.FinancialAsyncOptions.md)
- [FinancialOptions](../interfaces/internal_.FinancialOptions.md)
- [FinancialPresetComponent](../interfaces/internal_.FinancialPresetComponent.md)
- [FinancialPresetsResult](../interfaces/internal_.FinancialPresetsResult.md)
- [GenericXlsxOptions](../interfaces/internal_.GenericXlsxOptions.md)
- [ImageRenderOptions](../interfaces/internal_.ImageRenderOptions.md)
- [Job](../interfaces/internal_.Job.md)
- [MergeOptions](../interfaces/internal_.MergeOptions.md)
- [Model](../interfaces/internal_.Model.md)
- [ModelPromptBuilderConfigResult](../interfaces/internal_.ModelPromptBuilderConfigResult.md)
- [Output](../interfaces/internal_.Output.md)
- [Relation](../interfaces/internal_.Relation.md)
- [RelationMatching](../interfaces/internal_.RelationMatching.md)
- [Render](../interfaces/internal_.Render.md)
- [RenderOptions](../interfaces/internal_.RenderOptions.md)
- [RenderResult](../interfaces/internal_.RenderResult.md)
- [Webhook](../interfaces/internal_.Webhook.md)
- [keyword\_matching](../interfaces/internal_.keyword_matching.md)

### Type Aliases

- [AsyncStatus](internal_.md#asyncstatus)
- [AsyncType](internal_.md#asynctype)
- [Exclude](internal_.md#exclude)
- [Omit](internal_.md#omit)
- [OutputTarget](internal_.md#outputtarget)
- [Pick](internal_.md#pick)
- [Record](internal_.md#record)
- [ServiceIdentifier](internal_.md#serviceidentifier)
- [ServiceName](internal_.md#servicename)
- [SplitOptions](internal_.md#splitoptions)
- [keyword\_matching\_keywords](internal_.md#keyword_matching_keywords)

## Type Aliases

### AsyncStatus

Ƭ **AsyncStatus**: ``"done"`` \| ``"error"`` \| ``"closed"`` \| ``"rejected"`` \| ``"in_queue"`` \| ``"processing"`` \| ``"hitl"``

The available async statusses to use for filtering

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Async.types.ts:124](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/Capturing/Async.types.ts#L124)

___

### AsyncType

Ƭ **AsyncType**: ``"on_finish"`` \| ``"on_status_update"``

Which asynchronous webhook type you would like to set up, of which the following two are
valid options

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Async.types.ts:48](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/Capturing/Async.types.ts#L48)

___

### Exclude

Ƭ **Exclude**\<`T`, `U`\>: `T` extends `U` ? `never` : `T`

Exclude from T those types that are assignable to U

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1612

___

### Omit

Ƭ **Omit**\<`T`, `K`\>: [`Pick`](internal_.md#pick)\<`T`, [`Exclude`](internal_.md#exclude)\<keyof `T`, `K`\>\>

Construct a type with the properties of T except for those in type K.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `any` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1622

___

### OutputTarget

Ƭ **OutputTarget**: ``"Base64"`` \| ``"StorageAPI"``

#### Defined in

[src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.types.ts:1](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.types.ts#L1)

___

### Pick

Ƭ **Pick**\<`T`, `K`\>: \{ [P in K]: T[P] }

From T, pick a set of properties whose keys are in the union K

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1598

___

### Record

Ƭ **Record**\<`K`, `T`\>: \{ [P in K]: T }

Construct a type with a set of properties K of type T

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `any` |
| `T` | `T` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1605

___

### ServiceIdentifier

Ƭ **ServiceIdentifier**: ``"document_capturing_financial"`` \| ``"document_capturing_generic"`` \| ``"document_capturing_identity"`` \| ``"document_capturing_prompt_builder"``

#### Defined in

[src/ApiCommunicationsWrapper/Services/DocumentCapturing/Capturing.types.ts:24](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/DocumentCapturing/Capturing.types.ts#L24)

___

### ServiceName

Ƭ **ServiceName**: ``"Financial"`` \| ``"Identity"`` \| ``"Generic"`` \| ``"Prompt builder"``

#### Defined in

[src/ApiCommunicationsWrapper/Services/DocumentCapturing/Capturing.types.ts:18](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/DocumentCapturing/Capturing.types.ts#L18)

___

### SplitOptions

Ƭ **SplitOptions**: `Object`

Options to send to the split operation

**`See`**

[OutputTarget](internal_.md#outputtarget)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `output_target?` | [`OutputTarget`](internal_.md#outputtarget) |
| `page_ranges?` | `string`[] \| `string` |

#### Defined in

[src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.types.ts:57](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.types.ts#L57)

___

### keyword\_matching\_keywords

Ƭ **keyword\_matching\_keywords**: `string`[]

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.types.ts:4](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.types.ts#L4)
