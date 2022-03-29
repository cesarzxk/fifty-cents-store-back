"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var order_1 = __importDefault(require("../../schemas/order"));
var orderModel = (0, mongoose_1.model)("createOrder", order_1.default);
exports.default = orderModel;
