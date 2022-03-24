import bcrypt from 'bcrypt';
import { Response } from "express";

import main from "../..";
import accountModel from "../../../models/account";
import generateToken from "../../../services/generateToken";

interface accountType {
    _id:string,
    password:string,
    name:string,
    lastname:string,
    email:string,
    createDate: Date,
    }

async function setAccount(user:accountType, res:Response){
    await main();
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
            const newUser ={
                _id:user._id,
                password:hash,
                name:user.name,
                lastname:user.lastname,
                email:user.email,
                createDate: user.createDate,
                
            }
            accountModel.create(newUser).catch((error)=>{
                if(error.code == 11000){
                    return res.status(409).json(error.keyValue).end();
                }else{
                    return res.status(500).end();
                }

            }).then(()=>{
                return res.status(200).json({
                    token:generateToken(user._id),
                    id:user._id
                }).end()
            })
        })
    })
}


export default setAccount;