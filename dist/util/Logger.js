"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash = require("lodash");
var dictionary_1 = require("./dictionary");
var Logger = (function () {
    function Logger() {
    }
    Logger.getMessage = function (key) {
        var fields = key.split(".");
        if (dictionary_1.default.hasOwnProperty(fields[0])) {
            if (fields.length > 1) {
                return dictionary_1.default[fields[0]][Logger.getMessage(fields.splice(0, 1).join("."))];
            }
            else {
                return dictionary_1.default[fields[0]];
            }
        }
    };
    Logger.throw = function (key) {
        var message = lodash.get(dictionary_1.default, key, "Invalid error key");
        throw Error(message);
    };
    Logger.error = function (key) {
        var message = lodash.get(dictionary_1.default, key, "Invalid error key");
        if (message && window.console) {
            console.error(message);
        }
    };
    Logger.warn = function (key) {
        if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
            var message = "Warning: " + lodash.get(dictionary_1.default, key, "Invalid error key");
            if (message && window.console) {
                console.warn(message);
            }
        }
    };
    return Logger;
}());
exports.default = Logger;
//# sourceMappingURL=Logger.js.map