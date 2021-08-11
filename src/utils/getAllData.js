import { getDbClient } from "./getDbClient";
import constants from "../constants";

export const getAllData = async (callback) => {
    var docClient = getDbClient();

    var params = {
        TableName: constants.db_table_name
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