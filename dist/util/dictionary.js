"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dictionary = {
    arguments: {
        common: "Invalid arguments provided to react-registry. See: https://www.devnet.io/libs/react-registry/docs/#/arguments for correct syntax",
        register: "Invalid arguments provided to Registry.register(). See: https://www.devnet.io/libs/react-registry/docs/#/registering for correct syntax",
        provider: "Invalid arguments provided to registry Provider see: https://www.devnet.io/libs/react-registry/docs/#/providers for correct syntax",
        providerDetailed: "Invalid arguments supplied to registry Provider: either registry name ({registry: \"theName\"}), conditions ({conditions: {myCondition: true}), or both ({registry: \"theName\", conditions: {myCondition: true}}) are required."
    },
    duplicate: "A component with this key and no conditions has already been added to this registry. Ignoring. To register as an override, specify conditions. See: https://www.devnet.io/libs/react-registry/docs/#/registering",
    component: {
        invalid: "Attempting to render an invalid React component. Ensure a function / class was registered instead of an object"
    }
};
exports.default = dictionary;
//# sourceMappingURL=dictionary.js.map