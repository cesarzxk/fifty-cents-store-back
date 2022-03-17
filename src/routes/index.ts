import { Router } from "express";

import registerRouter from "./register.routes";
import itemsRouter from "./items.routes";
import authenticateRouter from "./authenticate.routes";
import createOrderRouter from "./order.routes";


export const routes = Router();

routes.use('/items', itemsRouter)
routes.use('/register', registerRouter)
routes.use('/user', authenticateRouter)
routes.use('/order', createOrderRouter)

