# Providers

Providers facilitate retrieving multiple components with the same options (registry name, conditions, or both). For the standard JS syntax provider, options are passed as an object. For the JSX syntax provider, each option is passed as a prop. The JSX provider uses React context to pass the options to any of its children. Options used when retrieving components override those inherited from the provider.

| Option     | Type   | Required | Description                                                           |
|------------|--------|----------|-----------------------------------------------------------------------|
| conditions | object | no       | Object containing any fields. ex: {foo: "bar", alpha: "omega"}        |
| registry   | string | no       | Name of the registry to register components in or retrieve them from  |

---

# Example Usage

### Required Imports

**JSX**
```js
// Can alias ProviderComponent to Provider
import { ProviderComponent, Registered } from 'react-registry'; 
```

**JS**
```js
import { Provider } from 'react-registry';
```

### Providing registry name


**JSX**
```jsx
<ProviderComponent registry="custom">
    <div>
        {/* Inherit provider's registry name and pass a property to the component */}
        <Registered id="myId" myReactProp="propValue" /> 

        {/* Override provider's registry name */}
        <Registered id="myId2" registry="notCustom"  /> 
    </div>
</ProviderComponent>
```

**JS**
```js
const provider = new Provider({registry: "custom"});

// Get component, inheriting provider's registry name
provider.get("myId");

// Get component, overriding provider's registry name
provider.get({id: "myId", registry: "notCustom"});

// Get component and create React element with a property
provider.createElement("myId", {myReactProp: "propValue"}) 
```

### Providing conditions


**JSX**
```jsx
<ProviderComponent conditions={{foo: "bar"}}>
    <div>
        <Registered id="myId" myReactProp="propValue" /> {/* Inherits provider's conditions */}

        <Registered id="myId2" conditions={{alpha: "omega"}} /> {/* Overrides provider's conditions */}
    </div>
</ProviderComponent>
```

**JS**
```js
const provider = new Provider({conditions: {foo: "bar"});

// Get component, inheriting provider's registry name
provider.get("myId");

// Get component, overriding provider's conditions name
provider.get({id: "myId", conditions: {alpha: "omega"}}); 

// Get component and create React element with a property
provider.createElement("myId", {myReactProp: "propValue"});
```

### Providing conditions and registry name

**JSX**
```jsx
<ProviderComponent registry="custom" conditions={{foo: "bar"}}>
    <div>
        {/* Inherits provider's conditions and registry name */}
        <Registered id="myId1" myReactProp="propValue" /> 
        
        {/* Overrides provider's conditions */}
        <Registered id="myId2" conditions={{alpha: "omega"}} /> 

        {/* Overrides provider's registry name */}
        <Registered id="myId3" registry="notCustom" />
    </div>
</ProviderComponent>
```

**JS**
```js
const provider = new Provider({registry: "custom", conditions: {foo: "bar"}});

// Get component, inheriting provider's conditions and registry name
provider.get("myId");

// Get component, overriding provider's conditions
provider.get({id: "myId1", conditions: {alpha: "omega"}});

// Get component, overriding provider's registry name
provider.get({id: "myId2", registry: "notCustom"});

// Get component with provider's conditions and registry name and create React element with a property
provider.createElement("myId3", {myReactProp: "propValue"});
```