[@klippa/dochorizon-sdk](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / Webhook

# Interface: Webhook

[\<internal\>](../modules/internal_.md).Webhook

Object needed to configure webhooks for async requests

**`See`**

 - [Authorization_header](internal_.Authorization_header.md)
 - [Basic_auth](internal_.Basic_auth.md)
 - [CustomHeaderItem](internal_.CustomHeaderItem.md)

## Table of contents

### Properties

- [auth](internal_.Webhook.md#auth)
- [custom\_headers](internal_.Webhook.md#custom_headers)
- [types](internal_.Webhook.md#types)
- [url](internal_.Webhook.md#url)

## Properties

### auth

• `Optional` **auth**: [`Authorization_header`](internal_.Authorization_header.md) \| [`Basic_auth`](internal_.Basic_auth.md)

configure authentication in the form of either Authorization Header or Basic
Authorization

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Async.types.ts:68](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/Capturing/Async.types.ts#L68)

___

### custom\_headers

• `Optional` **custom\_headers**: [`CustomHeaderItem`](internal_.CustomHeaderItem.md) \| [`CustomHeaderItem`](internal_.CustomHeaderItem.md)[]

An object containing any custom headers to send

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Async.types.ts:69](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/Capturing/Async.types.ts#L69)

___

### types

• **types**: [`AsyncType`](../modules/internal_.md#asynctype) \| [`AsyncType`](../modules/internal_.md#asynctype)[]

a list of strings/string indicating "on_status_update" or "on_finish" or
both

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Async.types.ts:70](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/Capturing/Async.types.ts#L70)

___

### url

• **url**: `string`

a string containin the url of the endpoint to communicate with

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Async.types.ts:71](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/Capturing/Async.types.ts#L71)
