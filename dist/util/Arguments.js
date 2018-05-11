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
    Arguments.parseArgs = function (params, thow) {
        if (thow === void 0) { thow = true; }
        if (thow && !Arguments.isValid(params)) {
            Logger_1.default.throw("arguments.common");
        }
        if (typeof params === 'string') {
            return new Arguments(params);
        }
        if (typeof params === 'object') {
            return new Arguments(params.id, params.conditions, params.registry);
        }
    };
    Arguments.parseComponentArgs = function (component, params) {
        var componentArgs = {};
        if (typeof component !== 'undefined') {
            if (typeof component.getId !== 'undefined') {
                componentArgs.id = component.getId();
            }
            if (typeof component.getConditions !== 'undefined') {
                componentArgs.conditions = component.getConditions();
            }
            if (typeof component.getRegistry !== 'undefined') {
                componentArgs.registry = component.getRegistry();
            }
        }
        var paramArgs = Arguments.parseArgs(params, false);
        if (typeof paramArgs !== 'undefined') {
            if (typeof paramArgs.id !== 'undefined') {
                componentArgs.id = paramArgs.id;
            }
            if (typeof paramArgs.conditions !== 'undefined') {
                componentArgs.conditions = paramArgs.conditions;
            }
            if (typeof paramArgs.registry !== 'undefined') {
                componentArgs.registry = paramArgs.registry;
            }
        }
        return Arguments.parseArgs(componentArgs);
    };
    Arguments.prototype.isValid = function () {
        return Arguments.isValid(this);
    };
    return Arguments;
}());
exports.Arguments = Arguments;
//# sourceMappingURL=Arguments.js.map