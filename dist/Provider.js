"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Registry_1 = require("./Registry");
var Arguments_1 = require("./util/Arguments");
var ProviderArguments_1 = require("./util/ProviderArguments");
var Provider = (function () {
    function Provider(params) {
        this.arguments = ProviderArguments_1.ProviderArguments.parseArgs(params);
    }
    Provider.getArgs = function (provider, local) {
        if (!local.conditions && provider.conditions) {
            local.conditions = provider.conditions;
        }
        if (!local.registry && provider.registry) {
            local.registry = provider.registry;
        }
        return local;
    };
    Provider.prototype.get = function (params) {
        var local = Arguments_1.Arguments.parseArgs(params);
        return Registry_1.default.get(Provider.getArgs(this.arguments, local));
    };
    Provider.prototype.render = function (params, props) {
        var local = Arguments_1.Arguments.parseArgs(params);
        return Registry_1.default.render(Provider.getArgs(this.arguments, local), props);
    };
    Provider.prototype.createElement = function (params, props) {
        return this.render(params, props);
    };
    return Provider;
}());
exports.default = Provider;
//# sourceMappingURL=Provider.js.map