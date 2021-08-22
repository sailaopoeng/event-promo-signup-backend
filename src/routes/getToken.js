import jwt from 'jsonwebtoken';
import { canGiveToken } from '../auth/canGiveToken';

export const getToken = {
    path: '/auth/token',
    method: 'post',
    auth: canGiveToken,
    handler: async (req, res) => {
        var toEncrypt = {};
        toEncrypt.username = req.body.username;
        toEncrypt.token_type = 'Bearer';
        toEncrypt.expires_in = parseInt(new Date().getTime() / 1000, 10) + process.env.token_life_span;

        var token = jwt.sign(toEncrypt, process.env.jws_secret);
        var token_response = {};
        token_response.access_token = token;
        token_response.token_type = 'Bearer';
        token_response.expires_in = process.env.token_life_span;
        // return the token back to the client application
        res.send(token_response);
    }
}