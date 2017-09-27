"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectMap_1 = require("../util/ObjectMap");
var RegistryEntry_1 = require("./RegistryEntry");
var Registry = (function () {
    function Registry() {
        this.registry = new ObjectMap_1.default();
    }
    Registry.prototype.register = function (component, key, conditions) {
        var entry = this.getEntry(key);
        if (entry) {
            entry.add(component, conditions);
        }
        else {
            var newEntry = new RegistryEntry_1.default();
            newEntry.add(component, conditions);
            this.registry.put(key, newEntry);
        }
    };
    Registry.prototype.getEntry = function (key) {
        return this.registry.get(key);
    };
    Registry.prototype.get = function (key, conditions) {
        var entry = this.getEntry(key);
        if (entry) {
            return entry.get(false, conditions);
        }
        return undefined;
    };
    return Registry;
}());
exports.default = Registry;
//# sourceMappingURL=Registry.js.map