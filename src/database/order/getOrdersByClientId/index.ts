import { Response } from "express";
import main from "../..";
import orderModel from "../../../models/order";

async function getOrdersByClientId(res: Response, clientId: string) {
  main();
  const foundOrders = await orderModel
    .find({ clientId: clientId })
    .catch((error) => {
      if (error.code == 11000) {
        return res.status(409).json(error.keyValue).end();
      } else {
        return res.status(500).end();
      }
    });

  return res.status(200).json(foundOrders).end();
}

export default getOrdersByClientId;
