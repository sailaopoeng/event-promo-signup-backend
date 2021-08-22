import { getDbClient } from "./getDbClient";

export const getAllData = async (callback) => {
    var docClient = getDbClient();

    var params = {
        TableName: process.env.db_table_name
    };
    

    await docClient.scan(params, function(err, data) {
        if (err) {
            console.log('err', err);
            callback([]);
        } else {
            // console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
            callback(data.Items.map(item => item.name));
        }
    });
}