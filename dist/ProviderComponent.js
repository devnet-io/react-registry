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
Object.defineProperty(exports, "__esModule", { value: true });
var lodash = require("lodash");
var PropTypes = require("prop-types");
var React = require("react");
var ProviderArguments_1 = require("./util/ProviderArguments");
var ProviderComponent = (function (_super) {
    __extends(ProviderComponent, _super);
    function ProviderComponent(props) {
        return _super.call(this, props) || this;
    }
    ProviderComponent.prototype.getChildContext = function () {
        var args = ProviderArguments_1.ProviderArguments.parseArgs({ conditions: this.props.conditions, registry: this.props.registry });
        if (this.context.registryProviderArgs) {
            var ancestorArguments = ProviderArguments_1.ProviderArguments.parseArgs(this.context.registryProviderArgs);
            if (typeof args.conditions !== "undefined") {
                ancestorArguments.conditions = lodash.assign(ancestorArguments.conditions, args.conditions);
            }
            if (typeof args.registry !== "undefined") {
                ancestorArguments.registry = args.registry;
            }
            return { registryProviderArgs: ancestorArguments };
        }
        else {
            return { registryProviderArgs: args };
        }
    };
    ProviderComponent.prototype.render = function () {
        return React.Children.only(this.props.children);
    };
    ProviderComponent.propTypes = {
        conditions: PropTypes.object,
        registry: PropTypes.string
    };
    ProviderComponent.contextTypes = {
        registryProviderArgs: PropTypes.object
    };
    ProviderComponent.childContextTypes = {
        registryProviderArgs: PropTypes.object
    };
    return ProviderComponent;
}(React.Component));
exports.default = ProviderComponent;
//# sourceMappingURL=ProviderComponent.js.map