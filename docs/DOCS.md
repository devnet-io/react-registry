# React-Registry

react-registry is a library for registering, retrieving, and rendering React components.

## Why use react-registry?

Easily define layouts in configuration files
* Avoid hard coded lists of available components
* Avoid importing every possible component (may require bundler setup)

Dynamically provide overrides for components based on custom conditions
* Customize components per client in a SaaS environment
* Provide upgrades to new versions of components seamlessly

react-registry also supports many other features such as multiple registries for organizing components, registry providers and wrappers for advanced retrieval options, and TypeScript interfaces to simplify registering components.

## Getting started

```
npm install react-registry --save
```

# Overview and Common Terms

## Id
Components are registered by id. This id is later used to retrieve and render them.

## Conditions
Multiple components can be registered with the same id. This allow custom conditions to be set for each. The registry searches for components in LIFO manner. If conditions are supplied when retrieving a component, the most recently registered component that meets those conditions will be returned. Otherwise, the component without any conditions will be returned. The conditions used to fetch the component can be a superset of the conditions used to register the component.

## Multiple Registries / Registry Name
A registry name can specified when registering and retrieving components. This allows multiple separate registries to store like components in.

# Arguments
Most react-registry functions accept both either an id or an object as arguments. The object is object composed of the common terms above.

Valid arguments:
```js
"myId"

{id: "myId"}

{id: "myId", conditions: {foo: "bar"}}

{id: "myId", registry: "my-registry-name"}}

{id: "myId", conditions: {foo: "bar"}, registry: "my-registry-name"}}
```

# Registering Components

## Basic
```js
Registry.register(MyComponent, "myId");
````
## With custom registry
```js
Registry.register(MyComponent, {id: "myId", registry: "custom"});
```
## With custom conditions
```js
Registry.register(MyComponent, {id: "myId", conditions: "custom"})
```
## With custom conditions and registry
```js
Registry.register(MyComponent, {id: "myId", conditions: {foo: "bar"}, registry: "custom"});
```
## By Interface

Components may also be registered without any parameters if they implement functions to provide them.

```js
Registry.register(MyComponent);
```
The component must implement
```js
getComponentId() {
    return "myId";
}
```
The component may optionally implement
```js
getRegistryName() {
    return "custom";
}

getRegistryConditions {
    return {foo: "bar"};
}
```

# Retrieving & Rendering Components
Coming soon...