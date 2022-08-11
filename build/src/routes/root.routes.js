"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var root = (0, express_1.Router)();
root.get("/", function (request, response) {
    return response.sendFile("./index.html", { root: __dirname });
});
exports.default = root;
