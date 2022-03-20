import {Request, Response, NextFunction} from 'express';
require('dotenv').config()
import jwt from 'jsonwebtoken';


export async function tokenAuthenticator(req:Request, res:Response, next:NextFunction){
    const token = req.headers.authorization?.split(' ');

    if(token != undefined && token[0] == 'Bearer'){
        jwt.verify(token[1], process.env.SECRET, (err)=>{
            if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
            next()
        })
    
    }else{
        return res.status(401)
    }
    
    
}