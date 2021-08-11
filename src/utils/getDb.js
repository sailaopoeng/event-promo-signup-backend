import AWS from "aws-sdk";
import constants from '../constants';

export const getDb = () => {
    AWS.config.update({
        region: constants.aws_region,
        endpoint: `https://dynamodb.${constants.aws_region}.amazonaws.com`,
        accessKeyId: constants.aws_access_key_id,
        secretAccessKey: constants.aws_secret_access_key
    });

    const dynamodb = new AWS.DynamoDB;
    
    return dynamodb;
}