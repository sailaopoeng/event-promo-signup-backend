import express from 'express';
import { routes } from './routes'
import cors from 'cors';
require('dotenv').config();

const app = express();
app.use(express.json({}));
app.use(express.urlencoded({extended: true}));
app.use(cors());

routes.forEach(route => {
    app[route.method](route.path, route.auth, route.handler);
});

var server = app.listen(process.env.server_port);
console.log(`server running on port ${process.env.server_port}`);