"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ComponentRegistry_1 = require("./lib/ComponentRegistry");
var Arguments_1 = require("./util/Arguments");
var Logger_1 = require("./util/Logger");
var Registry = (function () {
    function Registry() {
    }
    Registry.register = function (component, params) {
        if ((typeof component === 'object' || typeof component === 'function') && (typeof params === 'undefined' || typeof params !== 'object' || typeof params !== 'string')) {
            var args = Arguments_1.Arguments.parseComponentArgs(component, params);
            ComponentRegistry_1.default.getInstance().register(component, args.id, args.conditions, args.registry);
        }
        else {
            Logger_1.default.error("arguments.register");
        }
    };
    Registry.get = function (params) {
        var args = Arguments_1.Arguments.parseArgs(params);
        return ComponentRegistry_1.default.getInstance().get(args.id, args.conditions, args.registry);
    };
    Registry.render = function (params, props) {
        var args = Arguments_1.Arguments.parseArgs(params);
        var component = ComponentRegistry_1.default.getInstance().get(args.id, args.conditions, args.registry);
        if (typeof component === 'function') {
            return React.createElement(component, props);
        }
        Logger_1.default.warn("component.invalid");
    };
    Registry.createElement = function (params, props) {
        return Registry.render(params, props);
    };
    return Registry;
}());
exports.default = Registry;
//# sourceMappingURL=Registry.js.map