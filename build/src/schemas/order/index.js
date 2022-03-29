"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var itemSchema = new mongoose_1.Schema({
    productId: String,
    locale: String,
    price: Number,
    quantity: Number,
    name: String,
});
var orderSchema = new mongoose_1.Schema({
    _id: String,
    items: [itemSchema],
    clientId: String,
    data: Date,
    total: Number,
}, { collection: "orders" });
exports.default = orderSchema;
