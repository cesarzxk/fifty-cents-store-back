import Mongoose, {Schema} from "mongoose";
import {Response, Request} from 'express';


type itemType = {
    productId:number,
    locale: string,
    price: number,
    quantity:number
}

type orderType = {
    _id:String,
    items: itemType[],
    clientId:Number,
    data:Date,
}


const itemSchema = new Schema({
    productId:Number,
    locale: String,
    price: Number,
    quantity:Number
})

const orderSchema = new Mongoose.Schema({
    _id:String, 
    items: [itemSchema],
    clientId:Number,
    data:String,

}, { collection: 'orders' });

const order = Mongoose.model('orderCreate', orderSchema);


//db main -----------------------------------------------------------------------------------------------------------------
async function main(){
    process.env.SERVER && 
        await Mongoose.connect(process.env.SERVER);
}



//order functions-----------------------------------------------------------------------------------------------------------

export async function getOrderById(res:Response, id:string){
    main()
    const foundOrder = await order.findById(id).catch(
        (error)=>{
        if(error.code == 11000){
            res.status(409).json(error.keyValue).end();
        }else{
            res.status(500).end();
        }
    });
    console.log(foundOrder)
    res.status(200).json(foundOrder).end();
}


export async function getOrdersByClientId(res:Response, clientId:string){
    main()
    const foundOrders = await order.find({clientId:clientId}).catch(
        (error)=>{
        if(error.code == 11000){
            res.status(409).json(error.keyValue).end();
        }else{
            res.status(500).end();
        }
    });

    res.status(200).json(foundOrders).end();
}



export function setOrder(res:Response, newOrder:orderType){
    main();
    order.create(newOrder).catch((error)=>{
        if(error.code == 11000){
            res.status(409).json(error.keyValue).end();
        }else{
            res.status(500).end();
        }

    }).then(()=>{
        res.status(200).end()
    })

    
}

