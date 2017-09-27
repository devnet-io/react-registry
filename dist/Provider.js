"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Registry_1 = require("./Registry");
var Arguments_1 = require("./util/Arguments");
var ProviderArguments_1 = require("./util/ProviderArguments");
var RegistryProvider = (function () {
    function RegistryProvider(params) {
        this.arguments = ProviderArguments_1.default.parseArgs(params);
    }
    RegistryProvider.getArgs = function (provider, local) {
        if (!local.conditions && provider.conditions) {
            local.conditions = provider.conditions;
        }
        if (!local.registry && provider.registry) {
            local.registry = provider.registry;
        }
        return local;
    };
    RegistryProvider.prototype.get = function (params) {
        var local = Arguments_1.default.parseArgs(params);
        return Registry_1.default.get(RegistryProvider.getArgs(this.arguments, local));
    };
    RegistryProvider.prototype.render = function (params, props) {
        var local = Arguments_1.default.parseArgs(params);
        return Registry_1.default.render(RegistryProvider.getArgs(this.arguments, local), props);
    };
    return RegistryProvider;
}());
exports.default = RegistryProvider;
//# sourceMappingURL=Provider.js.map