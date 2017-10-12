"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectMap = (function () {
    function ObjectMap() {
        this.map = {};
    }
    ObjectMap.prototype.has = function (key) {
        return key in this.map;
    };
    ObjectMap.prototype.get = function (key) {
        return this.map[key];
    };
    ObjectMap.prototype.put = function (key, object) {
        this.map[key] = object;
    };
    return ObjectMap;
}());
exports.default = ObjectMap;
//# sourceMappingURL=ObjectMap.js.map