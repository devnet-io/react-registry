# Class: Registered


React component for retrieving other components form the registry.

For usage: [https://www.devnet.io/libs/react-registry/docs/#/retrieving](https://www.devnet.io/libs/react-registry/docs/#/retrieving)


## Hierarchy


 `Component`.<`any`>,.<`any`>

**↳ Registered**







## Index

### Constructors

* [constructor](jsdoc_registered.md#constructor)


### Properties

* [context](jsdoc_registered.md#context)
* [props](jsdoc_registered.md#props)
* [refs](jsdoc_registered.md#refs)
* [state](jsdoc_registered.md#state)


### Methods

* [forceUpdate](jsdoc_registered.md#forceupdate)
* [render](jsdoc_registered.md#render)
* [setState](jsdoc_registered.md#setstate)
* [componentDidCatch](jsdoc_registered.md#componentdidcatch)
* [componentDidMount](jsdoc_registered.md#componentdidmount)
* [componentDidUpdate](jsdoc_registered.md#componentdidupdate)
* [componentWillMount](jsdoc_registered.md#componentwillmount)
* [componentWillReceiveProps](jsdoc_registered.md#componentwillreceiveprops)
* [componentWillUnmount](jsdoc_registered.md#componentwillunmount)
* [componentWillUpdate](jsdoc_registered.md#componentwillupdate)
* [shouldComponentUpdate](jsdoc_registered.md#shouldcomponentupdate)


### Object literals

* [contextTypes](jsdoc_registered.md#contexttypes)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Registered**(props: *`any`*): [Registered](jsdoc_registered.md)


*Overrides Component.__constructor*

*Defined in [Registered.tsx:21](https://github.com/devnet-io/react-registry/blob/f0735c9/src/Registered.tsx#L21)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| props | `any`   |  - |





**Returns:** [Registered](jsdoc_registered.md)

---


## Properties
<a id="context"></a>

###  context

**●  context**:  *`any`* 

*Inherited from Component.context*





___

<a id="props"></a>

###  props

**●  props**:  *`Readonly`.<`object`>`Readonly`.<`any`>* 

*Inherited from Component.props*





___

<a id="refs"></a>

###  refs

**●  refs**:  *`object`* 

*Inherited from Component.refs*


#### Type declaration


[key: `string`]: `ReactInstance`






___

<a id="state"></a>

###  state

**●  state**:  *`Readonly`.<`any`>* 

*Inherited from Component.state*





___


## Methods
<a id="forceupdate"></a>

###  forceUpdate

► **forceUpdate**(callBack?: *`function`*): `void`



*Inherited from Component.forceUpdate*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callBack | `function`   |  - |





**Returns:** `void`





___

<a id="render"></a>

###  render

► **render**(): `Element`



*Overrides Component.render*

*Defined in [Registered.tsx:27](https://github.com/devnet-io/react-registry/blob/f0735c9/src/Registered.tsx#L27)*





**Returns:** `Element`





___

<a id="setstate"></a>

###  setState

► **setState**K(f: *`function`*, callback?: *`function`*): `void`

► **setState**K(state: *`Pick`.<`any`>,.<`K`>*, callback?: *`function`*): `void`



*Inherited from Component.setState*



**Type parameters:**

#### K :  `keyof S`
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| f | `function`   |  - |
| callback | `function`   |  - |





**Returns:** `void`



*Inherited from Component.setState*



**Type parameters:**

#### K :  `keyof S`
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| state | `Pick`.<`any`>,.<`K`>   |  - |
| callback | `function`   |  - |





**Returns:** `void`





___

<a id="componentdidcatch"></a>

### «Static»«Optional» componentDidCatch

► **componentDidCatch**(error: *`Error`*, errorInfo: *`ErrorInfo`*): `void`



*Inherited from ComponentLifecycle.componentDidCatch*



Catches exceptions generated in descendant components. Unhandled exceptions will cause the entire component tree to unmount.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| error | `Error`   |  - |
| errorInfo | `ErrorInfo`   |  - |





**Returns:** `void`





___

<a id="componentdidmount"></a>

### «Static»«Optional» componentDidMount

► **componentDidMount**(): `void`



*Inherited from ComponentLifecycle.componentDidMount*



Called immediately after a component is mounted. Setting state here will trigger re-rendering.




**Returns:** `void`





___

<a id="componentdidupdate"></a>

### «Static»«Optional» componentDidUpdate

► **componentDidUpdate**(prevProps: *`Readonly`.<`any`>*, prevState: *`Readonly`.<`any`>*, prevContext: *`any`*): `void`



*Inherited from ComponentLifecycle.componentDidUpdate*



Called immediately after updating occurs. Not called for the initial render.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| prevProps | `Readonly`.<`any`>   |  - |
| prevState | `Readonly`.<`any`>   |  - |
| prevContext | `any`   |  - |





**Returns:** `void`





___

<a id="componentwillmount"></a>

### «Static»«Optional» componentWillMount

► **componentWillMount**(): `void`



*Inherited from ComponentLifecycle.componentWillMount*



Called immediately before mounting occurs, and before `Component#render`. Avoid introducing any side-effects or subscriptions in this method.




**Returns:** `void`





___

<a id="componentwillreceiveprops"></a>

### «Static»«Optional» componentWillReceiveProps

► **componentWillReceiveProps**(nextProps: *`Readonly`.<`any`>*, nextContext: *`any`*): `void`



*Inherited from ComponentLifecycle.componentWillReceiveProps*



Called when the component may be receiving new props. React may call this even if props have not changed, so be sure to compare new and existing props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| nextProps | `Readonly`.<`any`>   |  - |
| nextContext | `any`   |  - |





**Returns:** `void`





___

<a id="componentwillunmount"></a>

### «Static»«Optional» componentWillUnmount

► **componentWillUnmount**(): `void`



*Inherited from ComponentLifecycle.componentWillUnmount*



Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.




**Returns:** `void`





___

<a id="componentwillupdate"></a>

### «Static»«Optional» componentWillUpdate

► **componentWillUpdate**(nextProps: *`Readonly`.<`any`>*, nextState: *`Readonly`.<`any`>*, nextContext: *`any`*): `void`



*Inherited from ComponentLifecycle.componentWillUpdate*



Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| nextProps | `Readonly`.<`any`>   |  - |
| nextState | `Readonly`.<`any`>   |  - |
| nextContext | `any`   |  - |





**Returns:** `void`





___

<a id="shouldcomponentupdate"></a>

### «Static»«Optional» shouldComponentUpdate

► **shouldComponentUpdate**(nextProps: *`Readonly`.<`any`>*, nextState: *`Readonly`.<`any`>*, nextContext: *`any`*): `boolean`



*Inherited from ComponentLifecycle.shouldComponentUpdate*



Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true. `PureComponent` implements a shallow comparison on props and state and returns true if any props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate` and `componentDidUpdate` will not be called.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| nextProps | `Readonly`.<`any`>   |  - |
| nextState | `Readonly`.<`any`>   |  - |
| nextContext | `any`   |  - |





**Returns:** `boolean`





___


<a id="contexttypes"></a>

## Object literal: contextTypes


<a id="contexttypes.registryproviderargs"></a>

###  registryProviderArgs

**●  registryProviderArgs**:  *`Requireable`.<`any`>*  =  PropTypes.object

*Defined in [Registered.tsx:20](https://github.com/devnet-io/react-registry/blob/f0735c9/src/Registered.tsx#L20)*





___


