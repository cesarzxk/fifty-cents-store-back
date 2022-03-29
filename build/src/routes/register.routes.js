"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var setAccount_1 = __importDefault(require("../database/account/setAccount"));
var uuid_1 = require("uuid");
var registerRouter = (0, express_1.Router)();
registerRouter.post("/", function (request, response) {
    var _a, _b, _c, _d;
    var erros = [];
    (_a = request.body.email) !== null && _a !== void 0 ? _a : erros.push("email");
    (_b = request.body.password) !== null && _b !== void 0 ? _b : erros.push("password");
    (_c = request.body.name) !== null && _c !== void 0 ? _c : erros.push("name");
    (_d = request.body.lastname) !== null && _d !== void 0 ? _d : erros.push("lastname");
    request.body.email == "" && erros.push("email");
    request.body.password == "" && erros.push("password");
    request.body.name == "" && erros.push("name");
    request.body.lastname == "" && erros.push("lastname");
    if (erros.length == 0) {
        (0, setAccount_1.default)({
            _id: (0, uuid_1.v1)(),
            password: request.body.password.toString(),
            name: request.body.name,
            lastname: request.body.lastname,
            email: request.body.email,
            createDate: new Date(),
        }, response);
    }
    else {
        response.status(412).json({ error: erros }).end();
    }
});
exports.default = registerRouter;
