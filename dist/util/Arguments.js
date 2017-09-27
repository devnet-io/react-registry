"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logger_1 = require("./Logger");
var Arguments = (function () {
    function Arguments(id, conditions, registry) {
        this.id = id;
        this.conditions = conditions;
        this.registry = registry;
    }
    Arguments.isValid = function (args) {
        return typeof args === 'string' || (typeof args === 'object' && ((typeof args.id === 'string' && typeof args.conditions === 'undefined' && typeof args.registry === 'undefined') ||
            (typeof args.id === 'string' && typeof args.conditions === 'object' && typeof args.registry === 'undefined') ||
            (typeof args.id === 'string' && typeof args.conditions === 'undefined' && typeof args.registry === 'string') ||
            (typeof args.id === 'string' && typeof args.conditions === 'object' && typeof args.registry === 'string')));
    };
    Arguments.parseArgs = function (params) {
        if (!Arguments.isValid(params)) {
            Logger_1.default.throw("arguments.common");
        }
        if (typeof params === 'string') {
            return new Arguments(params);
        }
        return new Arguments(params.id, params.conditions, params.registry);
    };
    Arguments.prototype.isValid = function () {
        return Arguments.isValid(this);
    };
    return Arguments;
}());
exports.default = Arguments;
//# sourceMappingURL=Arguments.js.map