import "dotenv/config";
import express from "express";
import { routes } from "./routes";
import http from "http";

import bodyParcer from "body-parser";
var queue = require("express-queue");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
  exposedHeaders: "Content-Range",
};

app.use(cors(corsOptions));
app.use(bodyParcer.json());

app.use(queue({ activeLimit: 2, queuedLimit: 2 }));
app.use(routes);

export const rooms = () => {};

server.listen(process.env.PORT || 3333, () => {
  console.log(`Servidor iniciado na porta ${process.env.PORT || 3333} ! 😁`);
});
