import { Schema } from "mongoose";

const itemSchema = new Schema({
  productId: String,
  locale: String,
  price: Number,
  quantity: Number,
  name: String,
});

const orderSchema = new Schema(
  {
    _id: String,
    items: [itemSchema],
    clientId: String,
    data: Date,
    total: Number,
  },
  { collection: "orders" }
);

export default orderSchema;
