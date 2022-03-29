"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var accountSchema = new mongoose_1.Schema({
    _id: String,
    password: String,
    name: String,
    lastname: String,
    email: { type: String, unique: true },
    createDate: Date,
}, { collection: "accounts" });
exports.default = accountSchema;
