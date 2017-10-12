# Class: Registry


Main class for interacting with the react-registry package. 

For usage: [https://www.devnet.io/libs/react-registry/docs/#/overview](https://www.devnet.io/libs/react-registry/docs/#/overview)


## Index

### Methods

* [get](jsdoc_registry.md#get)
* [register](jsdoc_registry.md#register)
* [render](jsdoc_registry.md#render)



---
## Methods
<a id="get"></a>

### «Static» get

► **get**(params: *`string`⎮`any`*): `any`⎮`undefined`



*Defined in [Registry.ts:41](https://github.com/devnet-io/react-registry/blob/f0735c9/src/Registry.ts#L41)*



Retrieves an object or function from the registry using supplied [Arguments](jsdoc_arguments.md)

For usage: [https://www.devnet.io/libs/react-registry/docs/#/retrieving](https://www.devnet.io/libs/react-registry/docs/#/retrieving)


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| params | `string`⎮`any`   |  options, parsed to [Arguments](jsdoc_arguments.md) |





**Returns:** `any`⎮`undefined`





___

<a id="register"></a>

### «Static» register

► **register**(component: *`any`*, params: *`string`⎮`any`*): `void`



*Defined in [Registry.ts:24](https://github.com/devnet-io/react-registry/blob/f0735c9/src/Registry.ts#L24)*



Validates and registers an object or function using supplied [Arguments](jsdoc_arguments.md)

For usage: [https://www.devnet.io/libs/react-registry/docs/#/registering](https://www.devnet.io/libs/react-registry/docs/#/registering)


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| component | `any`   |  the object or function to be registered |
| params | `string`⎮`any`   |  options, parsed to [Arguments](jsdoc_arguments.md) |





**Returns:** `void`





___

<a id="render"></a>

### «Static» render

► **render**(params: *`string`⎮`any`*, props?: *`object`*): `any`⎮`undefined`



*Defined in [Registry.ts:56](https://github.com/devnet-io/react-registry/blob/f0735c9/src/Registry.ts#L56)*



Retrieves an object or function from the registry using supplied [Arguments](jsdoc_arguments.md) and creates a React element with it. The item retrieved must be a function.

For usage: [https://www.devnet.io/libs/react-registry/docs/#/retrieving](https://www.devnet.io/libs/react-registry/docs/#/retrieving)


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| params | `string`⎮`any`   |  options, parsed to [Arguments](jsdoc_arguments.md) |
| props | `object`   |  properties for the React component |





**Returns:** `any`⎮`undefined`





___


