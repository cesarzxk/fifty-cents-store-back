"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function options(locale, id) {
    if (id) {
        return {
            host: "json-mock-api.herokuapp.com",
            path: "/".concat(locale, "_provider/").concat(id),
        };
    }
    else {
        return {
            host: "json-mock-api.herokuapp.com",
            path: "/".concat(locale, "_provider"),
        };
    }
}
exports.default = options;
