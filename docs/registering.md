
# Registering Components

Components must be registered before they can be retrieved and rendered. They can be registered by [arguments](#by-arguments) or by [interface](#by-interface).

!>If registering components in their corresponding *.jsx* files, the bundler can be [optionally configured](bundlers) to avoid the need to import these components later (in order for the register statement to execute).

```js
import { Registry } from 'react-registry';

// Sample component used below
class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.text}</h1>
                <p>{this.props.children}</p>
            <div>
        )
    }
}

//register here
```

## By Arguments

### Basic
```js
Registry.register(MyComponent, "myId");
```
### With custom registry
```js
Registry.register(MyComponent, {id: "myId", registry: "custom"});
```
### With custom conditions
```js
Registry.register(MyComponent, {id: "myId", conditions: {foo: "bar"}})
```
### With custom conditions and registry
```js
Registry.register(MyComponent, {id: "myId", conditions: {foo: "bar"}, registry: "custom"});
```
## By Interface

Components may also be registered without any arguments if they implement functions to provide them.

```js
Registry.register(MyComponent);
```

!> These functions must be static


The component must implement
```js
static getId() {
    return "myId";
}
```
The component may optionally implement
```js

static getConditions() {
    return {foo: "bar"};
}

static getRegistry() {
    return "custom";
}
```