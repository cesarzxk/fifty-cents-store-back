import {Response} from 'express';
import main from '../..';
import orderModel from '../../../models/order';

export async function getOrderById(res:Response, id:string){
    main()
    const foundOrder = await orderModel.findById(id).catch(
        (error)=>{
        if(error.code == 11000){
            return res.status(409).json(error.keyValue).end();
        }else{
            return res.status(500).end();
        }
    });
    console.log(foundOrder)
    return res.status(200).json(foundOrder).end();
}

export default getOrderById;