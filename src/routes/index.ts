import { Router } from "express";

import registerRouter from "./register.routes";
import itemsRouter from "./items.routes";
import authenticateRouter from "./authenticate.routes";
import createOrderRouter from "./order.routes";
import root from "./root.routes";

export const routes = Router();

routes.use("/items", itemsRouter);
routes.use("/register", registerRouter);
routes.use("/authenticate", authenticateRouter);
routes.use("/order", createOrderRouter);
routes.use("/", root)