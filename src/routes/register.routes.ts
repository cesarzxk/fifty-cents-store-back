import { Router, Request, Response } from "express";
import setAccount from "../database/account/setAccount";
import {v1} from 'uuid';

const registerRouter = Router();

registerRouter.post('/',  (request:Request, response:Response)=>{
        const erros = [];
        request.body.email    ?? erros.push('email');
        request.body.password ?? erros.push('password');
        request.body.name     ?? erros.push('name');
        request.body.lastname ?? erros.push('lastname');

        (erros.length == 0)? 
            
            setAccount({
                _id:v1(),
                password:request.body.password.toString(),
                name:request.body.name,
                lastname:request.body.lastname,
                email:request.body.email,
                createDate: new Date(),
            }, response)
        :
            response.status(409).json({'error':erros}).end()

})


export default registerRouter;