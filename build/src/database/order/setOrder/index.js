"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __importDefault(require("../.."));
var order_1 = __importDefault(require("../../../models/order"));
function setOrder(res, newOrder) {
    (0, __1.default)();
    order_1.default
        .create(newOrder)
        .catch(function (error) {
        if (error.code == 11000) {
            return res.status(409).json(error.keyValue).end();
        }
        else {
            console.log(error);
            return res.status(500).end();
        }
    })
        .then(function () {
        return res.status(200).end();
    });
}
exports.default = setOrder;
