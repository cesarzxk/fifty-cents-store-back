import Mongoose from "mongoose";
import {NextFunction, Response, Request} from 'express';
require('dotenv').config()
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


interface accountType {
    _id:string,
    password:string,
    name:string,
    lastname:string,
    email:string,
    createDate: Date,
    }


const accountSchema = new Mongoose.Schema({ 
    _id:String,
    password:String,
    name:String,
    lastname:String,
    email:{type:String, unique:true},
    createDate: Date,

}, { collection: 'accounts' });

const account = Mongoose.model('accountCreate', accountSchema);

    

async function main(){
    process.env.SERVER && 
        await Mongoose.connect(process.env.SERVER);
}


//tokens generated---------------------------------------------------------------------------------------------------------
function GenerateToken(_id:string){
    const token = jwt.sign({_id:_id}, String(process.env.SECRET), {
        expiresIn: 604800 // expires in 7DAYS
    });

    return token;
}


//set anny acconunt type------------------------------------------------------------------------------------------

export async function setAccount(user:accountType, res:Response){
    await main();
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
            const newUser ={
                _id:user._id,
                password:hash,
                name:user.name,
                lastName:user.lastname,
                email:user.email,
                createDate: user.createDate,
                
            }
            account.create(newUser).catch((error)=>{
                if(error.code == 11000){
                    res.status(409).json(error.keyValue).end();
                }else{
                    res.status(500).end();
                }

            }).then(()=>{
                res.status(200).json({token:GenerateToken(user._id)}).end()
            })
        })
    })
}

//retriever account data ------------------------------------------------------------------------------------------

export async function getAccount(res:Response, username:string, password:string){
    try{
        await main();
        const user = (await account.findOne({username:username}))
        bcrypt.compare(password, user.password, (err, result)=>{
            if(result){
        
                res.status(200).json(
                    {
                        name:user.name,
                        lastname:user.lastname,
                        email:user.idGoogle,
                        token:GenerateToken(user._id)
                    }).end()
            }else{
                res.status(401).end()
            }
            });    
    }catch{
        res.status(401).end()
    }
}


