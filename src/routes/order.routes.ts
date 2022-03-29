import { Router, Request, Response } from "express";
import { v4 } from "uuid";

import getOrderById from "../database/order/getOrderById";
import getOrdersByClientId from "../database/order/getOrdersByClientId";
import setOrder from "../database/order/setOrder";
import { tokenAuthenticator } from "../middlewares/tokenAuthenticator";

const orderRouter = Router();

type itemType = {
  productId: number;
  locale: string;
  price: number;
  quantity: number;
  name: string;
};

orderRouter.post(
  "/",
  tokenAuthenticator,
  (request: Request, response: Response) => {
    if (request.body.items && request.body.clientId) {
      const itensChecked = request.body.items.map((item: itemType) => {
        if (
          item.productId == undefined ||
          item.locale == undefined ||
          item.price == undefined ||
          item.quantity == undefined ||
          item.name == undefined
        ) {
          response.status(412).send("Erro no pedido!").end();
        } else {
          return item;
        }
      });

      if (request.body.total == 0) {
        return response.status(404).send("Erro no pedido!").end();
      }

      setOrder(response, {
        _id: v4(),
        items: itensChecked,
        clientId: request.body.clientId,
        total: request.body.total,
        data: new Date(),
      });
    } else {
      response.status(404).end();
    }
  }
);

orderRouter.get(
  "/",
  tokenAuthenticator,
  (request: Request, response: Response) => {
    if (request.query.clientId) {
      getOrdersByClientId(response, request.query.clientId.toString());
    } else {
      if (request.query.id) {
        getOrderById(response, request.query.id.toString());
      } else {
        response.status(404).end();
      }
    }
  }
);

export default orderRouter;
