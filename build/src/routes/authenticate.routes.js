"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var getAccount_1 = __importDefault(require("../database/account/getAccount"));
var authenticateRouter = (0, express_1.Router)();
authenticateRouter.post("/", function (request, response) {
    request.body.email && request.body.email != ""
        ? request.body.password && request.body.password != ""
            ? (0, getAccount_1.default)(response, request.body.email, request.body.password)
            : response.status(412).json({ condition: "password" }).end()
        : response.status(412).json({ condition: "email" }).end();
});
exports.default = authenticateRouter;
