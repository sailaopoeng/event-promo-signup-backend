import { getDbClient } from "./getDbClient";
import constants from "../constants";

export const getDataByEmail = async (email, callback) => {
    var docClient = getDbClient();

    var params = {
        TableName: constants.db_table_name,
        Key:{
            "email": email
        }
    };
    

    await docClient.get(params, function(err, data) {
        if (err) {
            console.log('err', err);
            callback([]);
        } else {
            // console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
            callback(data.Item);
        }
    });
}