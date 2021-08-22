import { getDbClient } from "./getDbClient";

export const getDataByEmail = async (email, callback) => {
    var docClient = getDbClient();

    var params = {
        TableName: process.env.db_table_name,
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