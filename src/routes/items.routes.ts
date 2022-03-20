import { Router, Request, Response } from "express";
import {getItem} from "../api/getItems";
import {tokenAuthenticator} from "../middlewares/tokenAuthenticator";

const itemsRouter = Router();


itemsRouter.get('/', (request:Request, response:Response)=>{

    if (request.query.locale && request.query.id){
        getItem(response, request.query.locale.toString(), request.query.id.toString());
    }
    else{
        if(request.query.locale){
            getItem(response, request.query.locale.toString());
        }else{
            response.status(404).send('Erro! locale não especificado!').end();
        }   
    }
})


export default itemsRouter