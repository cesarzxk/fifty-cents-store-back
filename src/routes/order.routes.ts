import { Router, Request, Response } from "express";
import { setOrder, getOrderById, getOrdersByClientId } from "../database/order";
import {v4} from 'uuid';

const orderRouter = Router();

/*
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

*/
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

    if (request.query.clientId){
        getOrdersByClientId(response, request.query.clientId.toString());
    }
    else{if(request.query.id){
            getOrderById(response, request.query.id.toString());
        }else{
            response.status(404).end();
        }
    }
})



export default orderRouter;