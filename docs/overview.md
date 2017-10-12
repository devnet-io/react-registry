# React Registry

react-registry is a library for registering, retrieving, and rendering React components.

---

## Why use react-registry?

Easily define layouts in configuration files
* Avoid hard coded lists of available components
* Avoid importing every possible component (may require bundler setup)

Dynamically provide overrides for components based on custom conditions
* Customize components per client in a SaaS environment
* Provide upgrades to new versions of components seamlessly

react-registry also supports many other features such as multiple registries for organizing components, registry providers and wrappers for advanced retrieval options, and TypeScript interfaces to simplify registering components.

---

# Common Terms

### Id
Components are registered by id. This id is later used to retrieve and render them.

### Conditions
Multiple components can be registered with the same id, allowing custom conditions for when to retrieve the component to be set for each. 

If conditions are supplied when retrieving a component, the most recently registered component (LIFO order) that meets those conditions will be returned. Otherwise, the component without any conditions will be returned. 

The conditions used to fetch the component can be a superset of the conditions used to register the component. 

All conditions used to register the component must be provided to retrieve the component. Eg component registered with dog = bob, retrieved with dog = bob and cat = brett

### Multiple Registries / Registry Name
A registry name can specified when registering and retrieving components, allowing multiple separate registries to store components in. If no name is specified a registry named "default" will be used.


---
# Getting started

```
npm install react-registry --save
```

---


# Basic Usage

## Registering a component

```jsx
import { Registry } from 'react-registry';

class TitleComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.text}</h1>
                <p>{this.props.children}</p>
            <div>
        )
    }
}

// Register the component with id "title"
Registry.register(TitleComponent, "title"); 
```

!>To use this syntax without requiring the component to be imported later, the bundler may need to be [configured appropriately](bundlers).

## Retrieving & Rendering

***JSX Syntax***

```jsx
import { Registered } from 'react-registry';

class MyApp extends React.Component {
    render() {
        return (
            <div>
                {/* Retrieve component from the registry and create React element */}

                <Registered id="title" text="Hello Registry">
                    <div>A child</div>
                </Registered>

                {/* Above is equivalent adding the component as if it was imported normally
                 *
                 * <TitleComponent text="Hello Registry">
                 *     <div>A child</div>
                 * </TitleComponent>
                 */}
            </div>
        )
    }
}
```

***JS Syntax***

```jsx
import { Registry } form 'react-registry';

class MyApp extends React.Component {
    render() {
        return (
            <div>
                {/* Retrieve component from the registry and create React element  */}

                {Registry.render("title", {text: "Hello Registry"})} 
                
                {/* Above is equivalent adding the component as if it was imported normally
                 *
                 * <TitleComponent text="Hello Registry" />
                 */}
            </div>
        )
    }
}
```