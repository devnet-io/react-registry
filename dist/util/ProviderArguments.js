"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logger_1 = require("./Logger");
var ProviderArguments = (function () {
    function ProviderArguments(conditions, name) {
        this.conditions = conditions;
        this.registry = name;
    }
    ProviderArguments.isValid = function (args) {
        return typeof args === 'object' && ((typeof args.conditions === 'object' && typeof args.registry === 'undefined') ||
            (typeof args.conditions === 'undefined' && typeof args.registry === 'string') ||
            (typeof args.conditions === 'object' && typeof args.registry === 'string'));
    };
    ProviderArguments.parseArgs = function (arg1) {
        if (ProviderArguments.isValid(arg1)) {
            return new ProviderArguments(arg1.conditions, arg1.registry);
        }
        Logger_1.default.error("arguments.provider");
        return new ProviderArguments();
    };
    ProviderArguments.prototype.isValid = function () {
        return ProviderArguments.isValid(this);
    };
    return ProviderArguments;
}());
exports.ProviderArguments = ProviderArguments;
//# sourceMappingURL=ProviderArguments.js.map