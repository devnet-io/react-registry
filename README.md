# React Registry
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/devnet-io/react-registry/blob/master/LICENSE) 
[![npm](https://img.shields.io/npm/v/react-registry.svg)](https://www.npmjs.com/package/react-registry)
[![Build Status](https://img.shields.io/travis/devnet-io/react-registry.svg)](https://travis-ci.org/devnet-io/react-registry)
[![Coveralls github](https://img.shields.io/coveralls/github/devnet-io/react-registry.svg)](https://coveralls.io/github/devnet-io/react-registry)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/devnet-io/react-registry/pulls)

react-registry is a library for registering, retrieving, and creating React components.

## Why use react-registry?

Easily define layouts in configuration files
* Avoid hard coded lists of available components
* Avoid importing every possible component (may require bundler setup)

Dynamically provide overrides for components based on custom conditions
* Customize components per client in a SaaS environment
* Provide upgrades to new versions of components seamlessly

react-registry also supports many other features such as multiple registries for organizing components, registry providers and wrappers for advanced retrieval options, and TypeScript interfaces to simplify registering components.

[View full documentation](https://www.devnet.io/libs/react-registry)

## Getting started

```
npm install react-registry --save
```

## Basic Usage

### Registering a component

```jsx
import { Registry } form 'react-registry';

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

Registry.register(TitleComponent, "title");
```

*Note: to use this syntax without requiring the component to be imported later, the bundler may need to be [configured appropriately](https://www.devnet.io/libs/react-registry/docs/bundlers).*

### Retrieving and Rendering a Component

***JS Syntax***

```jsx
import { Registry } from 'react-registry';

class MyApp extends React.Component {
    render() {
        
        // Retrieve component from the registry
        const TitleComponent = Registry.get("title");
        
        // or
        
        // Retrieve the component and create an element with it.
        const titleComponent = Registry.createElement("title", {text: "Hello Registry"});
    
        return (
            <div>
                <TitleComponent text="HelloRegistry" />
                
                { /* or */ }
               
                {titleComponent}
            </div>
        )
    }
}
```
***Component Syntax***

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

## Advanced Usage

For more advanced usage, such as providers, custom conditions, and separate registries, view the [full documentation](https://www.devnet.io/libs/react-registry) and browse the examples.
