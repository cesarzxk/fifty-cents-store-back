import { Response } from "express";
import main from "../..";
import orderModel from "../../../models/order";

type itemType = {
  productId: number;
  locale: string;
  price: number;
  quantity: number;
  name: string;
};

type orderType = {
  _id: String;
  items: itemType[];
  clientId: Number;
  data: Date;
  total: number;
};

function setOrder(res: Response, newOrder: orderType) {
  main();

  orderModel
    .create(newOrder)
    .catch((error) => {
      if (error.code == 11000) {
        return res.status(409).json(error.keyValue).end();
      } else {
        console.log(error);
        return res.status(500).end();
      }
    })
    .then(() => {
      return res.status(200).end();
    });
}

export default setOrder;
