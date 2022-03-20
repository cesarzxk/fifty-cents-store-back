import {Schema} from "mongoose";


const itemSchema = new Schema({
    productId:Number,
    locale: String,
    price: Number,
    quantity:Number
})


const orderSchema = new Schema({
    _id:String, 
    items: [itemSchema],
    clientId:Number,
    data:String,

}, { collection: 'orders' });


export default orderSchema;