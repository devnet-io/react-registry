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
var PropTypes = require("prop-types");
var React = require("react");
var ProviderArguments_1 = require("./util/ProviderArguments");
var ProviderComponent = (function (_super) {
    __extends(ProviderComponent, _super);
    function ProviderComponent(props) {
        return _super.call(this, props) || this;
    }
    ProviderComponent.prototype.getChildContext = function () {
        return { registryProviderArgs: ProviderArguments_1.default.parseArgs({ conditions: this.props.conditions, registry: this.props.registry }) };
    };
    ProviderComponent.prototype.render = function () {
        return React.Children.only(this.props.children);
    };
    ProviderComponent.propTypes = {
        conditions: PropTypes.object,
        registry: PropTypes.string
    };
    ProviderComponent.childContextTypes = {
        registryProviderArgs: PropTypes.object
    };
    return ProviderComponent;
}(React.Component));
exports.default = ProviderComponent;
//# sourceMappingURL=ProviderComponent.js.map