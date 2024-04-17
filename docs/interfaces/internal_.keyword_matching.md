[@klippa/dochorizon-sdk](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / keyword\_matching

# Interface: keyword\_matching

[\<internal\>](../modules/internal_.md).keyword_matching

object to configure keyword matching for an api call

## Table of contents

### Properties

- [id](internal_.keyword_matching.md#id)
- [keywords](internal_.keyword_matching.md#keywords)

## Properties

### id

• **id**: `string`

string to identify the keyword matching rule

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.types.ts:16](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.types.ts#L16)

___

### keywords

• **keywords**: `string` \| [`keyword_matching_keywords`](../modules/internal_.md#keyword_matching_keywords)

either a list of keywords or a string indicating a regex to use to look
for keywords

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.types.ts:18](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.types.ts#L18)
