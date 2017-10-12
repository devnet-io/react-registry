# Class: Arguments


Parses and validates the common arguments object passed to many react-registry classes For full documentation: [https://www.devnet.io/libs/react-registry/docs/#/arguments](https://www.devnet.io/libs/react-registry/docs/#/arguments)


## Index

### Constructors

* [constructor](jsdoc_arguments.md#constructor)


### Properties

* [conditions](jsdoc_arguments.md#conditions)
* [id](jsdoc_arguments.md#id)
* [registry](jsdoc_arguments.md#registry)


### Methods

* [isValid](jsdoc_arguments.md#isvalid)
* [isValid](jsdoc_arguments.md#isvalid-1)
* [parseArgs](jsdoc_arguments.md#parseargs)
* [parseComponentArgs](jsdoc_arguments.md#parsecomponentargs)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Arguments**(id: *`string`*, conditions?: *`object`*, registry?: *`string`*): [Arguments](jsdoc_arguments.md)


*Defined in [util/Arguments.ts:84](https://github.com/devnet-io/react-registry/blob/f0735c9/src/util/Arguments.ts#L84)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  - |
| conditions | `object`   |  - |
| registry | `string`   |  - |





**Returns:** [Arguments](jsdoc_arguments.md)

---


## Properties
<a id="conditions"></a>

###  conditions

**●  conditions**:  *`any`⎮`undefined`* 

*Defined in [util/Arguments.ts:83](https://github.com/devnet-io/react-registry/blob/f0735c9/src/util/Arguments.ts#L83)*





___

<a id="id"></a>

###  id

**●  id**:  *`string`* 

*Defined in [util/Arguments.ts:82](https://github.com/devnet-io/react-registry/blob/f0735c9/src/util/Arguments.ts#L82)*





___

<a id="registry"></a>

###  registry

**●  registry**:  *`string`⎮`undefined`* 

*Defined in [util/Arguments.ts:84](https://github.com/devnet-io/react-registry/blob/f0735c9/src/util/Arguments.ts#L84)*





___


## Methods
<a id="isvalid"></a>

###  isValid

► **isValid**(): `boolean`



*Defined in [util/Arguments.ts:92](https://github.com/devnet-io/react-registry/blob/f0735c9/src/util/Arguments.ts#L92)*





**Returns:** `boolean`





___

<a id="isvalid-1"></a>

### «Static» isValid

► **isValid**(args: *`any`*): `boolean`



*Defined in [util/Arguments.ts:11](https://github.com/devnet-io/react-registry/blob/f0735c9/src/util/Arguments.ts#L11)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| args | `any`   |  - |





**Returns:** `boolean`





___

<a id="parseargs"></a>

### «Static» parseArgs

► **parseArgs**(params: *`any`*, thow?: *`boolean`*): [Arguments](jsdoc_arguments.md)



*Defined in [util/Arguments.ts:20](https://github.com/devnet-io/react-registry/blob/f0735c9/src/util/Arguments.ts#L20)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| params | `any`  | - |   - |
| thow | `boolean`  | true |   - |





**Returns:** [Arguments](jsdoc_arguments.md)





___

<a id="parsecomponentargs"></a>

### «Static» parseComponentArgs

► **parseComponentArgs**(component: *`any`*, params: *`string`⎮`any`*): [Arguments](jsdoc_arguments.md)



*Defined in [util/Arguments.ts:35](https://github.com/devnet-io/react-registry/blob/f0735c9/src/util/Arguments.ts#L35)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| component | `any`   |  - |
| params | `string`⎮`any`   |  - |





**Returns:** [Arguments](jsdoc_arguments.md)





___


