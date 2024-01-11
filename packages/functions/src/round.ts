import AWS from 'aws-sdk';
import * as uuid from 'uuid';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { Table } from 'sst/node/table';
// import * as Round from '@sst-predict5-project/core/round';

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const create = async (event: APIGatewayProxyEvent) => {
    // Request body is passed in as a JSON encoded string in 'event.body'
    console.log("Event", event);
    if (!event.body) {
        return {
            statusCode: 404,
            body: JSON.stringify({ error: true }),
        };
    }

    const data = JSON.parse(event.body);
    console.log('data', data);
    const params = {
        TableName: Table.Game.tableName,
        Item: {
            // The attributes of the item to be created
            PK: '123', // The id of the author
            SK: uuid.v4(), // A unique uuid
            id: data.id, // Parsed from request body
            scorers: [],
            createdAt: Date.now(), // Current Unix timestamp
        },
    };

    try {
        await dynamoDb.put(params).promise();

        return {
            statusCode: 200,
            body: JSON.stringify(params.Item),
        };
    } catch (error) {
        let message;
        if (error instanceof Error) {
            message = error.message;
        } else {
            message = String(error);
        }
        return {
            statusCode: 500,
            body: JSON.stringify({ error: message }),
        };
    }
};

// export const list = ApiHandler(async (_evt) => {
//     return {
//         statusCode: 200,
//         body: JSON.stringify(Round.list()),
//     };
// });
