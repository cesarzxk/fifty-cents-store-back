import {sign} from "jsonwebtoken";

function generateToken(_id:string){
    const token = sign({_id:_id}, String(process.env.SECRET), {
        expiresIn: 604800 // expires in 7DAYS
        
    });

    return token;
}

export default generateToken;