[@klippa/dochorizon-sdk](../README.md) / [Exports](../modules.md) / DocHorizon

# Namespace: DocHorizon

## Table of contents

### Namespaces

- [Auth](DocHorizon.Auth.md)
- [Capturing](DocHorizon.Capturing.md)
- [DocumentToolkit](DocHorizon.DocumentToolkit.md)
- [Financial](DocHorizon.Financial.md)
- [Generic](DocHorizon.Generic.md)
- [Prompt](DocHorizon.Prompt.md)
- [Storage](DocHorizon.Storage.md)

### Functions

- [authenticate](DocHorizon.md#authenticate)
- [unAuthenticate](DocHorizon.md#unauthenticate)

## Functions

### authenticate

▸ **authenticate**(`apikey`): `void`

Authenticate the API with an API key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `apikey` | `string` | the API key to authenticate with |

#### Returns

`void`

#### Defined in

[index.ts:62](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/index.ts#L62)

___

### unAuthenticate

▸ **unAuthenticate**(): `void`

Unauthenticate by removing the API key
this will render the user unable to do any API requests
and will permanently remove the api key string from any vars/services

#### Returns

`void`

#### Defined in

[index.ts:71](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/index.ts#L71)
