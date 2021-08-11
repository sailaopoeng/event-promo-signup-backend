import { isAuthenticated } from "../auth/isAuthenticated";
import { getAllData } from "../utils/getAllData";

export const getAllName = {
    path: '/api/get-all-names',
    method: 'get',
    auth: isAuthenticated,
    handler: async (req, res) => {
        getAllData((data) => {
            // console.log('data', data);
            res.status(200).json(data);
        });
    }
}