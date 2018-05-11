"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var Sets = require("../util/set");
var Logger_1 = require("../util/Logger");
var ComponentEntry_1 = require("./ComponentEntry");
var RegistryEntry = (function () {
    function RegistryEntry() {
        this.components = new Array();
    }
    RegistryEntry.prototype.findDefault = function () {
        return lodash_1.find(this.components, function (ce) { return ce.conditions === undefined; });
    };
    RegistryEntry.prototype.getDefault = function () {
        var c = this.findDefault();
        return c ? c.component : undefined;
    };
    RegistryEntry.prototype.get = function (mustMatch, conditions) {
        if (conditions === undefined) {
            return this.getDefault();
        }
        else {
            var cce = lodash_1.find(this.components.slice().reverse(), function (ce) { return (Sets.isSubset(conditions, ce.conditions)); });
            return cce ? cce.component : (!mustMatch ? this.getDefault() : undefined);
        }
    };
    RegistryEntry.prototype.add = function (component, conditions) {
        if (conditions === undefined && this.findDefault() !== undefined) {
            Logger_1.default.warn("duplicate");
        }
        else {
            var ce = new ComponentEntry_1.default(component, conditions);
            this.components.push(ce);
        }
    };
    return RegistryEntry;
}());
exports.default = RegistryEntry;
//# sourceMappingURL=RegistryEntry.js.map