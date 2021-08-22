import AWS from "aws-sdk";

export const getDbClient = () => {
    AWS.config.update({
        region: process.env.aws_region,
        endpoint: `https://dynamodb.${process.env.aws_region}.amazonaws.com`,
        accessKeyId: process.env.aws_access_key_id,
        secretAccessKey: process.env.aws_secret_access_key
    });

    const doC = new AWS.DynamoDB.DocumentClient();
    
    return doC;
}