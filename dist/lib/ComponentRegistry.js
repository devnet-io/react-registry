"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectMap_1 = require("../util/ObjectMap");
var Registry_1 = require("./Registry");
var ComponentRegistry = (function () {
    function ComponentRegistry() {
        var defaultRegistry = new Registry_1.default();
        this.registries = new ObjectMap_1.default();
        this.registries.put(ComponentRegistry.DEFAULT_TARGET, defaultRegistry);
    }
    ComponentRegistry.getInstance = function () {
        if (!ComponentRegistry.instance) {
            ComponentRegistry.instance = new ComponentRegistry();
        }
        return ComponentRegistry.instance;
    };
    ComponentRegistry.prototype.getRegistry = function (target) {
        target = (target) ? target : ComponentRegistry.DEFAULT_TARGET;
        if (this.registries.has(target)) {
            return this.registries.get(target);
        }
        var newRegistry = new Registry_1.default();
        this.registries.put(target, newRegistry);
        return newRegistry;
    };
    ComponentRegistry.prototype.register = function (component, key, conditions, target) {
        var registry = this.getRegistry(target);
        registry.register(component, key, conditions);
    };
    ComponentRegistry.prototype.get = function (key, conditions, target) {
        var registry = this.getRegistry(target);
        if (registry) {
            return registry.get(key, conditions);
        }
        return undefined;
    };
    ComponentRegistry.DEFAULT_TARGET = "default";
    return ComponentRegistry;
}());
exports.default = ComponentRegistry;
//# sourceMappingURL=ComponentRegistry.js.map