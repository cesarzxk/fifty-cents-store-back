import express from 'express';
import {routes} from './routes';
import http from 'http';
import bodyParcer from 'body-parser';

const app = express()
const server = http.createServer(app);

app.use(bodyParcer.json())
app.use(routes)

export const rooms = ()=>{}

server.listen(3333, () =>{
    console.log('Servidor iniciado! 😁')
})

