import { byPass } from "../auth/byPass";
import { getDbClient } from "../utils/getDbClient";
import constants from "../constants";

export const saveSignup = {
    path: '/api/save-signup',
    method: 'post',
    auth: byPass,
    handler: async (req, res) => {
        const { username, email } = req.body;
        if(!username || !email) return res.sendStatus(400);

        const emailRegexp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if(!emailRegexp.test(email)) return res.status(400).send("Invalid email address format");

        // const dynamoDb = getDb();
        const docClient = getDbClient();

        var params = {
            TableName: constants.db_table_name,
            Item:{
                "name": username,
                "email": email
            }
        };

        docClient.put(params, function(err, data) {
            if (err) {
                console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
                res.sendStatus(500);
            } else {
                // console.log("Added item:", JSON.stringify(data, null, 2));
                res.status(200).send(`saved ${username} and ${email}`);
            }
        });

    }
}