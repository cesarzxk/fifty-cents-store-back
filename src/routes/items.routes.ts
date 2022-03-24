import { Router, Request, Response } from "express";
import getItem from "../api/getItems";

const itemsRouter = Router();


itemsRouter.get('/', (request:Request, response:Response)=>{
    if (request.query.locale && request.query.id){
        getItem(
            response, 
            request.query.locale as string, 
            undefined,
            undefined,
            request.query.id as string,
            request.query.search as string
            )
    }
    else{
        if(request.query.locale){
            getItem(
                response, 
                request.query.locale as string, 
                request.query.material as string[], 
                request.query.category as string[],
                undefined,
                request.query.search as string
                );
        }else{
            response.status(404).send('Erro! locale não especificado!').end();
        }   
    }

})


export default itemsRouter