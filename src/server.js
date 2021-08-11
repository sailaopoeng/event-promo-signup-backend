import express from 'express';
import constants from './constants';
import { routes } from './routes'
import cors from 'cors';

const app = express();
app.use(express.json({}));
app.use(express.urlencoded({extended: true}));
app.use(cors());

routes.forEach(route => {
    app[route.method](route.path, route.auth, route.handler);
});

var server = app.listen(constants.server_port);
console.log(`server running on port ${constants.server_port}`);