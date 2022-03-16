import { Router, Request, Response} from "express";
import {getAccount} from "../database/account";


const authenticateRouter = Router();


authenticateRouter.post('/', (request:Request, response:Response)=>{
    console.log(request.query)
    request.query.username?
        request.query.password? 
            getAccount(response, request.query.username.toString(), request.query.password.toString())
        :
        response.status(412).json({condition:"password"})
    :
    response.status(412).json({condition:"username"})
})


export default authenticateRouter;