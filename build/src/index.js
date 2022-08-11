"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rooms = void 0;
require("dotenv/config");
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
var http_1 = __importDefault(require("http"));
var body_parser_1 = __importDefault(require("body-parser"));
var queue = require("express-queue");
var cors = require("cors");
var app = (0, express_1.default)();
var server = http_1.default.createServer(app);
app.use(cors());
app.use(body_parser_1.default.json());
app.use(queue({ activeLimit: 2, queuedLimit: 2 }));
app.use(routes_1.routes);
var rooms = function () { };
exports.rooms = rooms;
server.listen(process.env.PORT || 3333, function () {
    console.log("Servidor iniciado na porta ".concat(process.env.PORT || 3333, " ! \uD83D\uDE01"));
});
