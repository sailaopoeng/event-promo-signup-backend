import { isAuthenticated } from "../auth/isAuthenticated";
import { getDataByEmail } from "../utils/getDataByEmail";

export const getSignUpByEmail = {
    path: '/api/get-signup/:email',
    method: 'get',
    auth: isAuthenticated,
    handler: async(req, res) => {
        const { email } = req.params;
        if(!email) res.sendStatus(400);

        getDataByEmail(email, (data) => {
            // console.log('data', data);
            res.status(200).json(data);
        });
        
    }
}