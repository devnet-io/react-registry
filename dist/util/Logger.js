"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var dictionary_1 = require("./dictionary");
var Logger = (function () {
    function Logger() {
    }
    Logger.getMessage = function (key) {
        var message = lodash_1.get(dictionary_1.default, key, "Invalid error key");
        return "react-registry - " + message;
    };
    Logger.throw = function (key) {
        throw Error(Logger.getMessage(key));
    };
    Logger.error = function (key) {
        var message = "Error: " + Logger.getMessage(key);
        if (message && window.console) {
            console.error(message);
        }
    };
    Logger.warn = function (key) {
        if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
            var message = "Warning: " + Logger.getMessage(key);
            if (message && window.console) {
                console.warn(message);
            }
        }
    };
    return Logger;
}());
exports.default = Logger;
//# sourceMappingURL=Logger.js.map