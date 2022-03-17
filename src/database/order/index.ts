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
    _id:{type:String, unique:true}, 
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

export function getOrderById(res:Response, id:string){
    main()
    const foundOrder = order.findById(id).catch(
        (error)=>{
        if(error.code == 11000){
            res.status(409).json(error.keyValue).end();
        }else{
            res.status(500).end();
        }
    });

    res.status(409).json(foundOrder).end();
}


export function getOrdersByClientId(res:Response, clientId:string){
    main()
    const foundOrders = order.find({clientId:clientId}).catch(
        (error)=>{
        if(error.code == 11000){
            res.status(409).json(error.keyValue).end();
        }else{
            res.status(500).end();
        }
    });

    res.status(409).json(foundOrders).end();
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

