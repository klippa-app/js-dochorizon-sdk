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

[src/ApiCommunicationsWrapper/Types/ApiTypes.ts:57](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Types/ApiTypes.ts#L57)

___

### data

• `Optional` **data**: [`Record`](../modules/internal_.md#record)\<`string`, `any`\> \| [`Document`](../modules/internal_.md#document) \| [`RenderResult`](../modules/internal_.md#renderresult) \| [`Documents`](../modules/internal_.md#documents) \| [`AsyncJobList`](../modules/internal_.md#asyncjoblist) \| [`AsyncPostResult`](../modules/internal_.md#asyncpostresult) \| [`FinancialPresetsResult`](../modules/internal_.md#financialpresetsresult)[] \| [`ModelPromptBuilderConfigResult`](../modules/internal_.md#modelpromptbuilderconfigresult)[] \| [`Model`](../modules/internal_.md#model)[] \| [`Document`](../modules/internal_.md#document)[]

the specific returned data, which type depends on which function used
[FinancialPresetsResult](../modules/internal_.md#financialpresetsresult) FinancialPresetResult
[ModelPromptBuilderConfigResult](../modules/internal_.md#modelpromptbuilderconfigresult) Model or Prompt Config Result
[AsyncJobList](../modules/internal_.md#asyncjoblist) Async Job Lists Result
[Model](../modules/internal_.md#model) Model results
[Document](../modules/internal_.md#document) document data result
[Documents](../modules/internal_.md#documents) document data result, but with page-ranges
[RenderResult](../modules/internal_.md#renderresult) a list of rendered image data
[AsyncPostResult](../modules/internal_.md#asyncpostresult) results from async post functions
Or Record<string, any> for Anything else that can be mapped as K,V

#### Defined in

[src/ApiCommunicationsWrapper/Types/ApiTypes.ts:81](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Types/ApiTypes.ts#L81)

___

### request\_id

• **request\_id**: `string`

#### Defined in

[src/ApiCommunicationsWrapper/Types/ApiTypes.ts:56](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Types/ApiTypes.ts#L56)

___

### result

• **result**: ``"success"`` \| ``"response"``

#### Defined in

[src/ApiCommunicationsWrapper/Types/ApiTypes.ts:55](https://github.com/klippa-app/js-dochorizon-sdk/blob/d1a513f/src/ApiCommunicationsWrapper/Types/ApiTypes.ts#L55)
