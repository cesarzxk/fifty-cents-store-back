import { Response } from "express";
import bcrypt from 'bcrypt';

import accountModel from "../../../models/account";
import generateToken from "../../../services/generateToken";
import main from "../..";

async function getAccount(res:Response, username:string, password:string){
    try{
        await main();
        const user = (await accountModel.findOne({username:username}))
        bcrypt.compare(password, user.password, (err, result)=>{
            if(result){
        
                res.status(200).json(
                    {
                        name:user.name,
                        lastname:user.lastname,
                        email:user.idGoogle,
                        token:generateToken(user._id)
                    }).end()
            }else{
                res.status(401).end()
            }
            });    
    }catch{
        res.status(401).end()
    }
}

export default getAccount;