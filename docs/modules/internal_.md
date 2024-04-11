[@klippa/dochorizon-sdk](../README.md) / [Exports](../modules.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Interfaces

- [ApiResponseData](../interfaces/internal_.ApiResponseData.md)
- [DocHorizonResponse](../interfaces/internal_.DocHorizonResponse.md)

### Type Aliases

- [Assignment](internal_.md#assignment)
- [Assignments](internal_.md#assignments)
- [AsyncJobList](internal_.md#asyncjoblist)
- [AsyncOptions](internal_.md#asyncoptions)
- [AsyncPostResult](internal_.md#asyncpostresult)
- [AsyncStatus](internal_.md#asyncstatus)
- [AsyncType](internal_.md#asynctype)
- [Authorization\_header](internal_.md#authorization_header)
- [Basic\_auth](internal_.md#basic_auth)
- [CustomHeaderItem](internal_.md#customheaderitem)
- [DocHorizonDocument](internal_.md#dochorizondocument)
- [Document](internal_.md#document)
- [Documents](internal_.md#documents)
- [Exclude](internal_.md#exclude)
- [FinancialAsyncOptions](internal_.md#financialasyncoptions)
- [FinancialOptions](internal_.md#financialoptions)
- [FinancialPresetComponent](internal_.md#financialpresetcomponent)
- [FinancialPresetsResult](internal_.md#financialpresetsresult)
- [GenericXlsxOptions](internal_.md#genericxlsxoptions)
- [ImageRenderOptions](internal_.md#imagerenderoptions)
- [Job](internal_.md#job)
- [MergeOptions](internal_.md#mergeoptions)
- [Model](internal_.md#model)
- [ModelPromptBuilderConfigResult](internal_.md#modelpromptbuilderconfigresult)
- [Omit](internal_.md#omit)
- [Output](internal_.md#output)
- [OutputTarget](internal_.md#outputtarget)
- [Pick](internal_.md#pick)
- [Record](internal_.md#record)
- [Relation](internal_.md#relation)
- [RelationMatching](internal_.md#relationmatching)
- [Render](internal_.md#render)
- [RenderOptions](internal_.md#renderoptions)
- [RenderResult](internal_.md#renderresult)
- [ServiceIdentifier](internal_.md#serviceidentifier)
- [ServiceName](internal_.md#servicename)
- [SplitOptions](internal_.md#splitoptions)
- [Webhook](internal_.md#webhook)
- [keyword\_matching](internal_.md#keyword_matching)
- [keyword\_matching\_keywords](internal_.md#keyword_matching_keywords)
- [keyword\_matching\_regex](internal_.md#keyword_matching_regex)

## Type Aliases

### Assignment

Ƭ **Assignment**: `Object`

Object used to configure a merchant/customer relation type

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fallback_id?` | `string` |
| `force_id?` | `string` |
| `groups` | `string`[] |

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.types.ts:28](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.types.ts#L28)

___

### Assignments

Ƭ **Assignments**: `Object`

type to determine the difference between customer and merchant data

**`See`**

 - [Assignment](internal_.md#assignment)
 - [Assignment](internal_.md#assignment)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `customer` | [`Assignment`](internal_.md#assignment) |
| `merchant` | [`Assignment`](internal_.md#assignment) |

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.types.ts:46](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.types.ts#L46)

___

### AsyncJobList

Ƭ **AsyncJobList**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `jobs` | [`Job`](internal_.md#job)[] |
| `paging_data` | `object` |

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Async.types.ts:55](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/Capturing/Async.types.ts#L55)

___

### AsyncOptions

Ƭ **AsyncOptions**: `Object`

Extra options that can be applied to asynchronous requests

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hitl?` | `string` |
| `webhook?` | [`Webhook`](internal_.md#webhook) |

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Async.types.ts:50](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/Capturing/Async.types.ts#L50)

___

### AsyncPostResult

Ƭ **AsyncPostResult**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `job_id` | `string` |

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Async.types.ts:114](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/Capturing/Async.types.ts#L114)

___

### AsyncStatus

Ƭ **AsyncStatus**: ``"done"`` \| ``"error"`` \| ``"closed"`` \| ``"rejected"`` \| ``"in_queue"`` \| ``"processing"`` \| ``"hitl"``

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Async.types.ts:66](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/Capturing/Async.types.ts#L66)

___

### AsyncType

Ƭ **AsyncType**: ``"on_finish"`` \| ``"on_status_update"``

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Async.types.ts:20](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/Capturing/Async.types.ts#L20)

___

### Authorization\_header

Ƭ **Authorization\_header**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `type` | `string` |

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Async.types.ts:5](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/Capturing/Async.types.ts#L5)

___

### Basic\_auth

Ƭ **Basic\_auth**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `password` | `string` |
| `username` | `string` |

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Async.types.ts:10](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/Capturing/Async.types.ts#L10)

___

### CustomHeaderItem

Ƭ **CustomHeaderItem**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `header_key` | `string` |
| `header_value` | `string` |

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Async.types.ts:15](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/Capturing/Async.types.ts#L15)

___

### DocHorizonDocument

Ƭ **DocHorizonDocument**: `Object`

A document object that can be used in capturing services

#### Type declaration

| Name | Type |
| :------ | :------ |
| `content_type?` | `string` |
| `data?` | `string` |
| `file_id?` | `string` |
| `filename?` | `string` |
| `page_ranges?` | `string`[] |
| `password?` | `string` |
| `url?` | `string` |

#### Defined in

[src/ApiCommunicationsWrapper/Types/UserOptionsTypes.ts:26](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Types/UserOptionsTypes.ts#L26)

___

### Document

Ƭ **Document**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `document` | \{ `output`: [`Output`](internal_.md#output)  } |
| `document.output` | [`Output`](internal_.md#output) |

#### Defined in

[src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.types.ts:57](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.types.ts#L57)

___

### Documents

Ƭ **Documents**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `documents` | \{ `output`: [`Output`](internal_.md#output) ; `page_range`: `string`  }[] |

#### Defined in

[src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.types.ts:80](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.types.ts#L80)

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

### FinancialAsyncOptions

Ƭ **FinancialAsyncOptions**: [`FinancialOptions`](internal_.md#financialoptions) & [`AsyncOptions`](internal_.md#asyncoptions)

Financial Async Options is a combination of Financial Options and Async Options

**`See`**

 - [FinancialOptions](internal_.md#financialoptions)
 - [AsyncOptions](internal_.md#asyncoptions)

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.types.ts:132](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.types.ts#L132)

___

### FinancialOptions

Ƭ **FinancialOptions**: `Object`

object containing any options to send to the financial endpoint

**`See`**

 - [keyword_matching](internal_.md#keyword_matching)
 - [RelationMatching](internal_.md#relationmatching)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `keyword_matching?` | [`keyword_matching`](internal_.md#keyword_matching)[] |
| `preset?` | `string` |
| `relation_matching?` | [`RelationMatching`](internal_.md#relationmatching) |

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.types.ts:116](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.types.ts#L116)

___

### FinancialPresetComponent

Ƭ **FinancialPresetComponent**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options` | \{ `enabled`: `boolean`  } |
| `options.enabled` | `boolean` |

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.types.ts:163](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.types.ts#L163)

___

### FinancialPresetsResult

Ƭ **FinancialPresetsResult**: `Object`

The results obtained from the financial presets endpoint

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `components` | [`FinancialPresetComponent`](internal_.md#financialpresetcomponent)[] | A list of components found for the given preset |
| `name` | `string` | The name of the preset |
| `slug` | `string` | the slug of the preset |

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.types.ts:148](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.types.ts#L148)

___

### GenericXlsxOptions

Ƭ **GenericXlsxOptions**: `Object`

Object to indicate how to output the generic capturer results

#### Type declaration

| Name | Type |
| :------ | :------ |
| `output_target` | ``"Base64"`` \| ``"StorageAPI"`` |

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Generic/Generic.types.ts:8](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/Capturing/Generic/Generic.types.ts#L8)

___

### ImageRenderOptions

Ƭ **ImageRenderOptions**: `Object`

Object to give options to the image rendering operation

#### Type declaration

| Name | Type |
| :------ | :------ |
| `height?` | `number` |
| `page_ranges?` | `string`[] \| `string` |
| `width?` | `number` |

#### Defined in

[src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.types.ts:23](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.types.ts#L23)

___

### Job

Ƭ **Job**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create_time` | `string` |
| `job_id` | `string` |
| `status` | [`AsyncStatus`](internal_.md#asyncstatus) |

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Async.types.ts:60](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/Capturing/Async.types.ts#L60)

___

### MergeOptions

Ƭ **MergeOptions**: `Object`

Object containing merge options for the Merge functionality of the document toolkit

#### Type declaration

| Name | Type |
| :------ | :------ |
| `output_target` | [`OutputTarget`](internal_.md#outputtarget) |

#### Defined in

[src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.types.ts:9](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.types.ts#L9)

___

### Model

Ƭ **Model**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | [`ServiceName`](internal_.md#servicename) |
| `service` | [`ServiceIdentifier`](internal_.md#serviceidentifier) |

#### Defined in

[src/ApiCommunicationsWrapper/Services/DocumentCapturing/Capturing.types.ts:1](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/DocumentCapturing/Capturing.types.ts#L1)

___

### ModelPromptBuilderConfigResult

Ƭ **ModelPromptBuilderConfigResult**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `slug` | `string` |

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/PromptBuilder/PromptBuilder.types.ts:8](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/Capturing/PromptBuilder/PromptBuilder.types.ts#L8)

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

### Output

Ƭ **Output**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `content_type` | `string` |
| `data` | `string` |
| `file_id` | `string` |

#### Defined in

[src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.types.ts:51](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.types.ts#L51)

___

### OutputTarget

Ƭ **OutputTarget**: ``"Base64"`` \| ``"StorageAPI"``

#### Defined in

[src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.types.ts:1](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.types.ts#L1)

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

### Relation

Ƭ **Relation**: `Object`

Type containing fields to use to search for relation
the id and groups field are required

**`Proeprty`**

groups - list of strings to apply this Relation data to

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bank_account_number?` | `string` |
| `city?` | `string` |
| `coc_number?` | `string` |
| `country?` | `string` |
| `email?` | `string` |
| `groups` | `string`[] |
| `id` | `string` |
| `name?` | `string` |
| `phone?` | `string` |
| `street_name?` | `string` |
| `street_number?` | `string` |
| `vat_number?` | `string` |
| `website?` | `string` |
| `zipcode?` | `string` |

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.types.ts:72](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.types.ts#L72)

___

### RelationMatching

Ƭ **RelationMatching**: `Object`

Type of data to send if relation matching is required in a request

**`See`**

 - [Assignments](internal_.md#assignments)
 - [Relation](internal_.md#relation)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `assignments` | [`Assignments`](internal_.md#assignments) |
| `relations` | [`Relation`](internal_.md#relation)[] |

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.types.ts:100](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.types.ts#L100)

___

### Render

Ƭ **Render**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `output` | [`Output`](internal_.md#output) |
| `page_range` | `string` |
| `pages` | \{ `height`: `number` ; `page_number`: `number` ; `point_to_pixel_ratio`: `number` ; `width`: `number` ; `x`: `number` ; `y`: `number`  } |
| `pages.height` | `number` |
| `pages.page_number` | `number` |
| `pages.point_to_pixel_ratio` | `number` |
| `pages.width` | `number` |
| `pages.x` | `number` |
| `pages.y` | `number` |

#### Defined in

[src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.types.ts:63](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.types.ts#L63)

___

### RenderOptions

Ƭ **RenderOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `output_target?` | [`OutputTarget`](internal_.md#outputtarget) |
| `renders` | [`ImageRenderOptions`](internal_.md#imagerenderoptions)[] \| [`ImageRenderOptions`](internal_.md#imagerenderoptions) |

#### Defined in

[src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.types.ts:29](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.types.ts#L29)

___

### RenderResult

Ƭ **RenderResult**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `renders` | [`Render`](internal_.md#render)[] |

#### Defined in

[src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.types.ts:76](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.types.ts#L76)

___

### ServiceIdentifier

Ƭ **ServiceIdentifier**: ``"document_capturing_financial"`` \| ``"document_capturing_generic"`` \| ``"document_capturing_identity"`` \| ``"document_capturing_prompt_builder"``

#### Defined in

[src/ApiCommunicationsWrapper/Services/DocumentCapturing/Capturing.types.ts:12](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/DocumentCapturing/Capturing.types.ts#L12)

___

### ServiceName

Ƭ **ServiceName**: ``"Financial"`` \| ``"Identity"`` \| ``"Generic"`` \| ``"Prompt builder"``

#### Defined in

[src/ApiCommunicationsWrapper/Services/DocumentCapturing/Capturing.types.ts:6](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/DocumentCapturing/Capturing.types.ts#L6)

___

### SplitOptions

Ƭ **SplitOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `output_target?` | [`OutputTarget`](internal_.md#outputtarget) |
| `page_ranges?` | `string`[] \| `string` |

#### Defined in

[src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.types.ts:35](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.types.ts#L35)

___

### Webhook

Ƭ **Webhook**: `Object`

Object needed to configure webhooks for async requests

**`See`**

 - [Authorization_header](internal_.md#authorization_header)
 - [Basic_auth](internal_.md#basic_auth)
 - [CustomHeaderItem](internal_.md#customheaderitem)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `auth?` | [`Authorization_header`](internal_.md#authorization_header) \| [`Basic_auth`](internal_.md#basic_auth) |
| `custom_headers?` | [`CustomHeaderItem`](internal_.md#customheaderitem)[] \| [`CustomHeaderItem`](internal_.md#customheaderitem) |
| `types` | [`AsyncType`](internal_.md#asynctype)[] \| [`AsyncType`](internal_.md#asynctype) |
| `url` | `string` |

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Async.types.ts:37](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/Capturing/Async.types.ts#L37)

___

### keyword\_matching

Ƭ **keyword\_matching**: `Object`

object to configure keyword matching for an api call

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `keywords` | [`keyword_matching_keywords`](internal_.md#keyword_matching_keywords) \| [`keyword_matching_regex`](internal_.md#keyword_matching_regex) |

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.types.ts:13](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.types.ts#L13)

___

### keyword\_matching\_keywords

Ƭ **keyword\_matching\_keywords**: `string`[]

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.types.ts:4](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.types.ts#L4)

___

### keyword\_matching\_regex

Ƭ **keyword\_matching\_regex**: `string`

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.types.ts:3](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.types.ts#L3)
