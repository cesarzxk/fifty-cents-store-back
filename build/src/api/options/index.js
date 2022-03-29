"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function options(locale, id) {
    if (id) {
        return {
            host: "616d6bdb6dacbb001794ca17.mockapi.io",
            path: "/devnology/".concat(locale, "_provider/").concat(id),
        };
    }
    else {
        return {
            host: "616d6bdb6dacbb001794ca17.mockapi.io",
            path: "/devnology/".concat(locale, "_provider"),
        };
    }
}
exports.default = options;
