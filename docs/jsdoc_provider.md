# Class: Provider


Facilitates retrieving multiple components with the same options 

For usage: [https://www.devnet.io/libs/react-registry/docs/#/providers](https://www.devnet.io/libs/react-registry/docs/#/providers)


## Index

### Constructors

* [constructor](jsdoc_provider.md#constructor)


### Methods

* [get](jsdoc_provider.md#get)
* [render](jsdoc_provider.md#render)
* [getArgs](jsdoc_provider.md#getargs)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Provider**(params: *`object`*): [Provider](jsdoc_provider.md)


*Defined in [Provider.ts:37](https://github.com/devnet-io/react-registry/blob/f0735c9/src/Provider.ts#L37)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| params | `object`   |  - |





**Returns:** [Provider](jsdoc_provider.md)

---



## Methods
<a id="get"></a>

###  get

► **get**(params: *`string`⎮`any`*): `any`⎮`undefined`



*Defined in [Provider.ts:52](https://github.com/devnet-io/react-registry/blob/f0735c9/src/Provider.ts#L52)*



Retrieves an object or function from the registry using supplied [Arguments](jsdoc_arguments.md) and [ProviderArguments](jsdoc_providerarguments.md) from the provider instance.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| params | `string`⎮`any`   |  options, parsed to [Arguments](arguments.md) |





**Returns:** `any`⎮`undefined`





___

<a id="render"></a>

###  render

► **render**(params: *`string`⎮`any`*, props?: *`object`*): `any`⎮`undefined`



*Defined in [Provider.ts:67](https://github.com/devnet-io/react-registry/blob/f0735c9/src/Provider.ts#L67)*



Retrieves an object or function from the registry using supplied [Arguments](jsodc_arguments.md) and [ProviderArguments](jsodc_providerarguments.md) from the provider instance, then creates a React element with it. The item retrieved must be a function.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| params | `string`⎮`any`   |  options, parsed to [Arguments](jsdoc_arguments.md) |
| props | `object`   |  properties for the React component |





**Returns:** `any`⎮`undefined`





___

<a id="getargs"></a>

### «Static» getArgs

► **getArgs**(provider: *[ProviderArguments](jsdoc_providerarguments.md)*, local: *[Arguments](jsdoc_arguments.md)*): [Arguments](jsdoc_arguments.md)



*Defined in [Provider.ts:22](https://github.com/devnet-io/react-registry/blob/f0735c9/src/Provider.ts#L22)*



Combines arguments held by the provider and those passes into to {@link get()} and {@link render()} methods to determine which arguments to send to the [Registry](jsdoc_registry.md).


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| provider | [ProviderArguments](jsdoc_providerarguments.md)   |  provider's options [ProviderArguments](jsdoc_providerarguments.md) |
| local | [Arguments](jsdoc_arguments.md)   |  options [Arguments](jsdoc_arguments.md) |





**Returns:** [Arguments](jsdoc_arguments.md)





___


