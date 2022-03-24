import express from 'express';
import {routes} from './routes';
import http from 'http';
import bodyParcer from 'body-parser';

var queue = require('express-queue');
const cors = require('cors')

const app = express()
const server = http.createServer(app);
app.use(cors())
app.use(bodyParcer.json())

app.use(queue({ activeLimit: 2, queuedLimit: 2 }))
app.use(routes)

export const rooms = ()=>{}

server.listen(3333, () =>{
    console.log('Servidor iniciado! 😁')
})

