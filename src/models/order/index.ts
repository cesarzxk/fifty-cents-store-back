import { model } from "mongoose";
import orderSchema from "../../schemas/order";

const orderModel = model("createOrder", orderSchema);

export default orderModel;
