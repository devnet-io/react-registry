# Class: ProviderComponent

 React component for passing arguments of a [Provider](jsdoc_provider) with context to [Registered](jsdoc_registered.md) components

For usage: [https://www.devnet.io/libs/react-registry/docs/#/providers](https://www.devnet.io/libs/react-registry/docs/#/providers)

## Hierarchy


 `Component`.<`IProviderProps`>,.<`any`>

**↳ ProviderComponent**







## Index

### Constructors

* [constructor](jsdoc_providercomponent.md#constructor)


### Properties

* [context](jsdoc_providercomponent.md#context)
* [props](jsdoc_providercomponent.md#props)
* [refs](jsdoc_providercomponent.md#refs)
* [state](jsdoc_providercomponent.md#state)


### Methods

* [forceUpdate](jsdoc_providercomponent.md#forceupdate)
* [getChildContext](jsdoc_providercomponent.md#getchildcontext)
* [render](jsdoc_providercomponent.md#render)
* [setState](jsdoc_providercomponent.md#setstate)
* [componentDidCatch](jsdoc_providercomponent.md#componentdidcatch)
* [componentDidMount](jsdoc_providercomponent.md#componentdidmount)
* [componentDidUpdate](jsdoc_providercomponent.md#componentdidupdate)
* [componentWillMount](jsdoc_providercomponent.md#componentwillmount)
* [componentWillReceiveProps](jsdoc_providercomponent.md#componentwillreceiveprops)
* [componentWillUnmount](jsdoc_providercomponent.md#componentwillunmount)
* [componentWillUpdate](jsdoc_providercomponent.md#componentwillupdate)
* [shouldComponentUpdate](jsdoc_providercomponent.md#shouldcomponentupdate)


### Object literals

* [childContextTypes](jsdoc_providercomponent.md#childcontexttypes)
* [propTypes](jsdoc_providercomponent.md#proptypes)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new ProviderComponent**(props: *IProviderProps*): [ProviderComponent](jsdoc_providercomponent.md)


*Overrides Component.__constructor*

*Defined in [ProviderComponent.tsx:25](https://github.com/devnet-io/react-registry/blob/f0735c9/src/ProviderComponent.tsx#L25)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| props | IProviderProps   |  - |





**Returns:** [ProviderComponent](jsdoc_providercomponent.md)

---


## Properties
<a id="context"></a>

###  context

**●  context**:  *`any`* 

*Inherited from Component.context*





___

<a id="props"></a>

###  props

**●  props**:  *`Readonly`.<`object`>`Readonly`.<IProviderProps>* 

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

<a id="getchildcontext"></a>

###  getChildContext

► **getChildContext**(): `object`



*Defined in [ProviderComponent.tsx:31](https://github.com/devnet-io/react-registry/blob/f0735c9/src/ProviderComponent.tsx#L31)*





**Returns:** `object`





___

<a id="render"></a>

###  render

► **render**(): `ReactElement`.<`any`>



*Overrides Component.render*

*Defined in [ProviderComponent.tsx:36](https://github.com/devnet-io/react-registry/blob/f0735c9/src/ProviderComponent.tsx#L36)*





**Returns:** `ReactElement`.<`any`>





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



Called immediately after a compoment is mounted. Setting state here will trigger re-rendering.




**Returns:** `void`





___

<a id="componentdidupdate"></a>

### «Static»«Optional» componentDidUpdate

► **componentDidUpdate**(prevProps: *`Readonly`.<IProviderProps>*, prevState: *`Readonly`.<`any`>*, prevContext: *`any`*): `void`



*Inherited from ComponentLifecycle.componentDidUpdate*



Called immediately after updating occurs. Not called for the initial render.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| prevProps | `Readonly`.<IProviderProps>   |  - |
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

► **componentWillReceiveProps**(nextProps: *`Readonly`.<IProviderProps>*, nextContext: *`any`*): `void`



*Inherited from ComponentLifecycle.componentWillReceiveProps*



Called when the component may be receiving new props. React may call this even if props have not changed, so be sure to compare new and existing props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| nextProps | `Readonly`.<IProviderProps>   |  - |
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

► **componentWillUpdate**(nextProps: *`Readonly`.<IProviderProps>*, nextState: *`Readonly`.<`any`>*, nextContext: *`any`*): `void`



*Inherited from ComponentLifecycle.componentWillUpdate*



Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| nextProps | `Readonly`.<IProviderProps>   |  - |
| nextState | `Readonly`.<`any`>   |  - |
| nextContext | `any`   |  - |





**Returns:** `void`





___

<a id="shouldcomponentupdate"></a>

### «Static»«Optional» shouldComponentUpdate

► **shouldComponentUpdate**(nextProps: *`Readonly`.<IProviderProps>*, nextState: *`Readonly`.<`any`>*, nextContext: *`any`*): `boolean`



*Inherited from ComponentLifecycle.shouldComponentUpdate*



Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true. `PureComponent` implements a shallow comparison on props and state and returns true if any props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate` and `componentDidUpdate` will not be called.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| nextProps | `Readonly`.<IProviderProps>   |  - |
| nextState | `Readonly`.<`any`>   |  - |
| nextContext | `any`   |  - |





**Returns:** `boolean`





___


<a id="childcontexttypes"></a>

## Object literal: childContextTypes


<a id="childcontexttypes.registryproviderargs"></a>

###  registryProviderArgs

**●  registryProviderArgs**:  *`Requireable`.<`any`>*  =  PropTypes.object

*Defined in [ProviderComponent.tsx:24](https://github.com/devnet-io/react-registry/blob/f0735c9/src/ProviderComponent.tsx#L24)*





___

<a id="proptypes"></a>

## Object literal: propTypes


<a id="proptypes.conditions"></a>

###  conditions

**●  conditions**:  *`Requireable`.<`any`>*  =  PropTypes.object

*Defined in [ProviderComponent.tsx:19](https://github.com/devnet-io/react-registry/blob/f0735c9/src/ProviderComponent.tsx#L19)*





___
<a id="proptypes.registry"></a>

###  registry

**●  registry**:  *`Requireable`.<`any`>*  =  PropTypes.string

*Defined in [ProviderComponent.tsx:20](https://github.com/devnet-io/react-registry/blob/f0735c9/src/ProviderComponent.tsx#L20)*





___


