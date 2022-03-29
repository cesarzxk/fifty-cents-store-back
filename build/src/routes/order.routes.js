"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var uuid_1 = require("uuid");
var getOrderById_1 = __importDefault(require("../database/order/getOrderById"));
var getOrdersByClientId_1 = __importDefault(require("../database/order/getOrdersByClientId"));
var setOrder_1 = __importDefault(require("../database/order/setOrder"));
var tokenAuthenticator_1 = require("../middlewares/tokenAuthenticator");
var orderRouter = (0, express_1.Router)();
orderRouter.post("/", tokenAuthenticator_1.tokenAuthenticator, function (request, response) {
    if (request.body.items && request.body.clientId) {
        var itensChecked = request.body.items.map(function (item) {
            if (item.productId == undefined ||
                item.locale == undefined ||
                item.price == undefined ||
                item.quantity == undefined ||
                item.name == undefined) {
                response.status(412).send("Erro no pedido!").end();
            }
            else {
                return item;
            }
        });
        if (request.body.total == 0) {
            return response.status(404).send("Erro no pedido!").end();
        }
        (0, setOrder_1.default)(response, {
            _id: (0, uuid_1.v4)(),
            items: itensChecked,
            clientId: request.body.clientId,
            total: request.body.total,
            data: new Date(),
        });
    }
    else {
        response.status(404).end();
    }
});
orderRouter.get("/", tokenAuthenticator_1.tokenAuthenticator, function (request, response) {
    if (request.query.clientId) {
        (0, getOrdersByClientId_1.default)(response, request.query.clientId.toString());
    }
    else {
        if (request.query.id) {
            (0, getOrderById_1.default)(response, request.query.id.toString());
        }
        else {
            response.status(404).end();
        }
    }
});
exports.default = orderRouter;
