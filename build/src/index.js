"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rooms = void 0;
require('dotenv').config();
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
var http = __importStar(require("http"));
var bodyParcer = __importStar(require("body-parser"));
var queue = require("express-queue");
var cors = require("cors");
var app = (0, express_1.default)();
var server = http.createServer(app);
app.use(cors());
app.use(bodyParcer.json());
app.use(queue({ activeLimit: 2, queuedLimit: 2 }));
app.use(routes_1.routes);
var rooms = function () { };
exports.rooms = rooms;
server.listen(3333, function () {
    console.log("Servidor iniciado! 😁");
});