# Class: ProviderArguments


Parses and validates the common arguments object passed to [Provider](jsdoc_provider.md) and [ProviderComponent](jsdoc_providercomponent.md) 

For usage: [https://www.devnet.io/libs/react-registry/docs/#/providers](https://www.devnet.io/libs/react-registry/docs/#/providers)

## Index

### Constructors

* [constructor](jsdoc_providerarguments.md#constructor)


### Properties

* [conditions](jsdoc_providerarguments.md#conditions)
* [registry](jsdoc_providerarguments.md#registry)


### Methods

* [isValid](jsdoc_providerarguments.md#isvalid)
* [isValid](jsdoc_providerarguments.md#isvalid-1)
* [parseArgs](jsdoc_providerarguments.md#parseargs)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new ProviderArguments**(conditions?: *`object`*, name?: *`string`*): [ProviderArguments](jsdoc_providerarguments.md)


*Defined in [util/ProviderArguments.ts:28](https://github.com/devnet-io/react-registry/blob/f0735c9/src/util/ProviderArguments.ts#L28)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| conditions | `object`   |  - |
| name | `string`   |  - |





**Returns:** [ProviderArguments](jsdoc_providerarguments.md)

---


## Properties
<a id="conditions"></a>

###  conditions

**●  conditions**:  *`any`⎮`undefined`* 

*Defined in [util/ProviderArguments.ts:27](https://github.com/devnet-io/react-registry/blob/f0735c9/src/util/ProviderArguments.ts#L27)*





___

<a id="registry"></a>

###  registry

**●  registry**:  *`string`⎮`undefined`* 

*Defined in [util/ProviderArguments.ts:28](https://github.com/devnet-io/react-registry/blob/f0735c9/src/util/ProviderArguments.ts#L28)*





___


## Methods
<a id="isvalid"></a>

###  isValid

► **isValid**(): `boolean`



*Defined in [util/ProviderArguments.ts:35](https://github.com/devnet-io/react-registry/blob/f0735c9/src/util/ProviderArguments.ts#L35)*





**Returns:** `boolean`





___

<a id="isvalid-1"></a>

### «Static» isValid

► **isValid**(args: *`any`*): `boolean`



*Defined in [util/ProviderArguments.ts:11](https://github.com/devnet-io/react-registry/blob/f0735c9/src/util/ProviderArguments.ts#L11)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| args | `any`   |  - |





**Returns:** `boolean`





___

<a id="parseargs"></a>

### «Static» parseArgs

► **parseArgs**(arg1: *`any`*): [ProviderArguments](jsdoc_providerarguments.md)



*Defined in [util/ProviderArguments.ts:19](https://github.com/devnet-io/react-registry/blob/f0735c9/src/util/ProviderArguments.ts#L19)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| arg1 | `any`   |  - |





**Returns:** [ProviderArguments](jsdoc_providerarguments.md)





___


