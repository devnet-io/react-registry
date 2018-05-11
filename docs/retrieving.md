# Getting components from the Registry

Registered components can either be retrieved as is from the registry or retrieved as React Elements. If a registry name is specified when registering a component, that name must be provided to retrieve it. 

If conditions are supplied when retrieving a component, the most recently registered component (LIFO order) that meets those conditions will be returned. Otherwise, the component without any conditions will be returned. The conditions used to fetch the component can be a superset of the conditions used to register the component.

The retrieve and render functions support the common [Arguments](arguments).

___

## Creating / Rendering Components
Calling the the createElement() function is the equivalent of retrieving or getting a component then calling *React.createElement()* on it. When using the JSX syntax, props and children are passed to the retrieved component. When using the JS syntax, only props are passed to the retrieved component.

### Required Imports

***JSX***
```js
import { Registered } from 'react-registry';
```
***JS***
```js
import { Registry } from 'react-registry';
```

### Basic

***JSX***
```jsx
// Optionally passing a react prop to the retrieved component
<Registered id="myId" myReactProp="propValue" /> 
```
***JS***
```js
// Optionally passing a react prop to the retrieved component
Registry.createElement("myId", {reactProp: "propValue"});
```

### With custom registry

***JSX***
```jsx
<Registered id="myId" registry="custom" myReactProp="propValue" />
```
***JS***
```js
Registry.createElement({id: "myId", registry: "custom"}, {myReactProp: "propValue"});
```

### With custom conditions

***JSX***
```jsx
<Registered id="myId" conditions={{conditions: {foo: "bar"}} myReactProp="propValue" />
```
***JS***
```js
Registry.createElement({id: "myId", conditions: {foo: "bar"}}, {myReactProp: "propValue"});
```

### With custom conditions and registry

***JSX***
```jsx
<Registered id="myId" conditions={{conditions: {foo: "bar"}}  registry="custom" reactProp="propValue" />
```
***JS***
```js
Registry.render({id: "myId", conditions: {foo: "bar"}, registry: "custom"}, {reactProp: "propValue"});
```

___


## Retrieving Components
!> The JSX syntax is for [rendering](retrieving#rendering-components) components only.

***JS***
```js
import { Registry } from 'react-registry';
```
### Basic
***JS***
```js
Registry.get("myId");
```
### With custom registry
***JS***
```js
Registry.get({id: "myId", registry: "custom"});
```
### With custom conditions
***JS***
```js
Registry.get({id: "myId", conditions: {foo: "bar"});
```
### With custom conditions and registry
***JS***
```js
Registry.get({id: "myId", conditions: {foo: "bar"}, registry: "custom"});
```