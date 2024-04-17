[@klippa/dochorizon-sdk](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / Render

# Interface: Render

[\<internal\>](../modules/internal_.md).Render

Render object that contains output data and rendered pages

**`See`**

[Output](internal_.Output.md)

## Table of contents

### Properties

- [output](internal_.Render.md#output)
- [page\_range](internal_.Render.md#page_range)
- [pages](internal_.Render.md#pages)

## Properties

### output

• **output**: [`Output`](internal_.Output.md)

object containing output data

#### Defined in

[src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.types.ts:114](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.types.ts#L114)

___

### page\_range

• **page\_range**: `string`

string indicating which page range this render is made from

#### Defined in

[src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.types.ts:115](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.types.ts#L115)

___

### pages

• **pages**: `Object`

object containing page metadata such as height, page_number, point_to_pixel
ratio, width, x coordinate and y coordinate

#### Type declaration

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `page_number` | `number` |
| `point_to_pixel_ratio` | `number` |
| `width` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.types.ts:116](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/DocumentToolkit/DocumentToolkit.types.ts#L116)
