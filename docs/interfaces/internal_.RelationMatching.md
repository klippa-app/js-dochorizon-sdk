[@klippa/dochorizon-sdk](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / RelationMatching

# Interface: RelationMatching

[\<internal\>](../modules/internal_.md).RelationMatching

Type of data to send if relation matching is required in a request

**`See`**

 - [Assignments](internal_.Assignments.md)
 - [Relation](internal_.Relation.md)

## Table of contents

### Properties

- [assignments](internal_.RelationMatching.md#assignments)
- [relations](internal_.RelationMatching.md#relations)

## Properties

### assignments

• **assignments**: [`Assignments`](internal_.Assignments.md)

Assignments object to determine what is considered a customer and
what is considered a merchant

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.types.ts:104](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.types.ts#L104)

___

### relations

• **relations**: [`Relation`](internal_.Relation.md)[]

A list of relation objects, each containing information about the
relation(s) to match

#### Defined in

[src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.types.ts:105](https://github.com/klippa-app/js-dochorizon-sdk/blob/205a2fd/src/ApiCommunicationsWrapper/Services/Capturing/Financial/Financial.types.ts#L105)
