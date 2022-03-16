import { Router, Request, Response } from "express";
import {setAccount} from "../database/account";
import {v4} from 'uuid';

const registerRouter = Router();


registerRouter.post('/',  (request:Request, response:Response)=>{
        const erros = [];
        request.query.email    ?? erros.push('email');
        request.query.password ?? erros.push('password');
        request.query.name     ?? erros.push('name');
        request.query.lastname ?? erros.push('lastname');

        (erros.length == 0)? 
            
            setAccount({
                _id:v4(),
                password:request.query.password,
                name:request.query.name,
                lastname:request.query.lastname,
                email:request.query.email,
                createDate: new Date(),
            }, response)
        :
            response.status(409).json({'error':erros}).end()

})


export default registerRouter;