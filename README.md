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

[View full documentation](https://www.devnet.io/libs/react-registry/docs)

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
                <h1>{this.props.title}</h1>
                <p>{this.props.children}</p>
            <div>
        )
    }
}

Registry.register(TitleComponent, "title");
```

*Note: to use this syntax without requiring the component to be imported later, the bundler may need to be [configured appropriately](https://www.devnet.io/libs/react-registry/docs#bundlers).*

### Retrieving and rendering a component

*JSX syntax*

```jsx
import { Registered } form 'react-registry';

class MyApp extends React.Component {
    render() {
        return (
            <div>
                // Retrieve component from the registry and create React element

                <Registered id="title" title="Hello Registry" />
                    <div>A child</div>
                </Registered>

                /* Above is equivalent adding the component as if it was imported normally
                 *
                 * <TitleComponent title="Hello Registry">
                 *     <div>A child</div>
                 * </TitleComponent>
                 */
            </div>
        )
    }
}
```

*JS syntax*

```jsx
import { Registry } form 'react-registry';

class MyApp extends React.Component {
    render() {
        return (
            <div>
                // Retrieve component from the registry and create React element

                {Registry.render("title", {title: "Hello Registry"})} 
                
                /* Above is equivalent adding the component as if it was imported normally
                 *
                 * <TitleComponent title="Hello Registry" />
                 */
            </div>
        )
    }
}
```

## Advanced Usage

For more advanced usage, such as providers, custom conditions, and separate registries, view the [full documentation](https://www.devnet.io/libs/react-registry) and browse the examples.