"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = require("jsonwebtoken");
function generateToken(_id) {
    var token = (0, jsonwebtoken_1.sign)({ _id: _id }, String(process.env.SECRET), {
        expiresIn: 604800, // expires in 7DAYS
    });
    return token;
}
exports.default = generateToken;
