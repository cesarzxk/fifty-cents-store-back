import http from 'http';
import {Response} from 'express';
import dataFormatter from '../../services/dataFormatter';
import options from '../options/'

export async function getItems(res:Response, locale:string , id?:string){
    http.get(options(locale, id), (result)=>{
        var data = "";
        result.on("data",(chunk)=>{
            data += chunk;
        })

        result.on('end',()=>{
            const newData = dataFormatter(JSON.parse(data), locale)
            res.status(200).json(newData).end()
        })
    });
    
    
}
