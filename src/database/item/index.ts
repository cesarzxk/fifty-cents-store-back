import http from 'http';

import {NextFunction, Response, Request} from 'express';


export async function getItem(res:Response, locale:string , id?:string){
    let options = null;

    id? 
        options = {
            host: '616d6bdb6dacbb001794ca17.mockapi.io',
            path: `/devnology/${locale}_provider/${id}`
        }
    
    :
        options = {
            host: '616d6bdb6dacbb001794ca17.mockapi.io',
            path: `/devnology/${locale}_provider`
        }
    
    http.get(options, (result)=>{
        var data = "";
        result.on("data",(chunk)=>{
            data += chunk;
        })

        result.on('end',()=>{
            res.status(200).json(JSON.parse(data)).end()
        })
    });
    
    
}
