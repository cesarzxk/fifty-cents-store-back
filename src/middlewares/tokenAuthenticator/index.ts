import {Request, Response, NextFunction} from 'express';
require('dotenv').config()
import jwt from 'jsonwebtoken';

interface requestAuth extends Request{
    _id?:string
}



export async function tokenAuthenticator(req:requestAuth, res:Response, next:NextFunction){
    const token = req.headers.authorization?.split(' ');

    if(token != undefined && token[0] == 'Bearer'){
        jwt.verify(token[1], process.env.SECRET, (err, decoded:{_id:string})=>{

            if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
            req._id = decoded._id;
            next()
        })
    
    }else{
        res.status(401).end()
    }
    
    
}