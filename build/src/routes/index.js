"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var express_1 = require("express");
var register_routes_1 = __importDefault(require("./register.routes"));
var items_routes_1 = __importDefault(require("./items.routes"));
var authenticate_routes_1 = __importDefault(require("./authenticate.routes"));
var order_routes_1 = __importDefault(require("./order.routes"));
var root_routes_1 = __importDefault(require("./root.routes"));
exports.routes = (0, express_1.Router)();
exports.routes.use("/items", items_routes_1.default);
exports.routes.use("/register", register_routes_1.default);
exports.routes.use("/authenticate", authenticate_routes_1.default);
exports.routes.use("/order", order_routes_1.default);
exports.routes.use("/", root_routes_1.default);
