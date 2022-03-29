"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var getItems_1 = __importDefault(require("../api/getItems"));
var itemsRouter = (0, express_1.Router)();
itemsRouter.get("/", function (request, response) {
    if (request.query.locale && request.query.id) {
        (0, getItems_1.default)(response, request.query.locale, undefined, undefined, request.query.id, undefined);
    }
    else {
        if (request.query.locale) {
            (0, getItems_1.default)(response, request.query.locale, request.query.material, request.query.category, undefined, request.query.search);
        }
        else {
            response.status(404).send("Erro! locale não especificado!").end();
        }
    }
});
exports.default = itemsRouter;
