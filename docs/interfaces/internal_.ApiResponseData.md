[@klippa/dochorizon-sdk](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / ApiResponseData

# Interface: ApiResponseData

[\<internal\>](../modules/internal_.md).ApiResponseData

The data returned by the API. Its contents are dependent of which service is used

## Table of contents

### Properties

- [code](internal_.ApiResponseData.md#code)
- [data](internal_.ApiResponseData.md#data)
- [request\_id](internal_.ApiResponseData.md#request_id)
- [result](internal_.ApiResponseData.md#result)

## Properties

### code

• `Optional` **code**: `number`

#### Defined in

[src/ApiCommunicationsWrapper/Types/ApiTypes.ts:57](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Types/ApiTypes.ts#L57)

___

### data

• `Optional` **data**: [`Record`](../modules/internal_.md#record)\<`string`, `any`\> \| [`Document`](internal_.Document.md) \| [`RenderResult`](internal_.RenderResult.md) \| [`Documents`](internal_.Documents.md) \| [`AsyncJobList`](internal_.AsyncJobList.md) \| [`AsyncPostResult`](internal_.AsyncPostResult.md) \| [`FinancialPresetsResult`](internal_.FinancialPresetsResult.md)[] \| [`ModelPromptBuilderConfigResult`](internal_.ModelPromptBuilderConfigResult.md)[] \| [`Model`](internal_.Model.md)[] \| [`Document`](internal_.Document.md)[]

the specific returned data, which type depends on which function used
[FinancialPresetsResult](internal_.FinancialPresetsResult.md) FinancialPresetResult
[ModelPromptBuilderConfigResult](internal_.ModelPromptBuilderConfigResult.md) Model or Prompt Config Result
[AsyncJobList](internal_.AsyncJobList.md) Async Job Lists Result
[Model](internal_.Model.md) Model results
[Document](internal_.Document.md) document data result
[Documents](internal_.Documents.md) document data result, but with page-ranges
[RenderResult](internal_.RenderResult.md) a list of rendered image data
[AsyncPostResult](internal_.AsyncPostResult.md) results from async post functions
Or Record<string, any> for Anything else that can be mapped as K,V

#### Defined in

[src/ApiCommunicationsWrapper/Types/ApiTypes.ts:81](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Types/ApiTypes.ts#L81)

___

### request\_id

• **request\_id**: `string`

#### Defined in

[src/ApiCommunicationsWrapper/Types/ApiTypes.ts:56](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Types/ApiTypes.ts#L56)

___

### result

• **result**: ``"success"`` \| ``"response"``

#### Defined in

[src/ApiCommunicationsWrapper/Types/ApiTypes.ts:55](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Types/ApiTypes.ts#L55)
