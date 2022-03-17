import { Router, Request, Response } from "express";
import { setOrder, getOrderById, getOrdersByClientId } from "../database/order";
import {v4, v1} from 'uuid';

const orderRouter = Router();

type itemType = {
    productId:number,
    locale: string,
    price: number,
    quantity:number
}

type orderType = {
    _id: {type:String, unique:true},
    items: itemType[],
    clientId:Number,
    data:Date,
}

orderRouter.post('/', (request:Request, response:Response)=>{
    if (request.body.items && request.body.clientId){
        setOrder(response,{
            _id:v4(),
            items:request.body.items,
            clientId:request.body.clientId,
            data:new Date()
        });
    }
    else{
        response.status(404).end();
    }
})



orderRouter.get('/', (request:Request, response:Response)=>{

    if (request.body.clientId){
        getOrdersByClientId(response, request.body.clientId);
    }
    else{
        getOrderById(response, request.body.id);
    }
})



export default orderRouter;