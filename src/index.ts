import "dotenv/config";
import express from "express";
import { routes } from "./routes";
import * as http from "http";

import * as bodyParcer from "body-parser";
var queue = require("express-queue");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
app.use(cors());
app.use(bodyParcer.json());

app.use(queue({ activeLimit: 2, queuedLimit: 2 }));
app.use(routes);

export const rooms = () => {};

server.listen(3000 || process.env.PORT, () => {
  console.log(`Servidor iniciado na porta ${process.env.PORT} ! 😁`);
});
