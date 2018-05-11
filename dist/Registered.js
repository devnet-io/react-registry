"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var React = require("react");
var Provider_1 = require("./Provider");
var Registry_1 = require("./Registry");
var Arguments_1 = require("./util/Arguments");
var ProviderArguments_1 = require("./util/ProviderArguments");
var Registered = (function (_super) {
    __extends(Registered, _super);
    function Registered(props) {
        return _super.call(this, props) || this;
    }
    Registered.prototype.render = function () {
        var args = Arguments_1.Arguments.parseArgs(__assign({}, this.props));
        if (this.context.registryProviderArgs) {
            var providerArgs = ProviderArguments_1.ProviderArguments.parseArgs(this.context.registryProviderArgs);
            args = Provider_1.default.getArgs(providerArgs, args);
        }
        return Registry_1.default.render(args, __assign({}, this.props));
    };
    Registered.contextTypes = {
        registryProviderArgs: PropTypes.object
    };
    return Registered;
}(React.Component));
exports.default = Registered;
//# sourceMappingURL=Registered.js.map