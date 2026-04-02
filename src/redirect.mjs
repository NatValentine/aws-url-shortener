import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const db = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
  try {
    const shortId = event.pathParameters.id;

    const result = await db.send(new GetCommand({
      TableName: "urls",
      Key: { id: shortId }
    }));

    if (!result.Item) {
      return {
        statusCode: 404,
        body: "Not found"
      };
    }

    return {
      statusCode: 302,
      headers: {
        Location: result.Item.originalUrl
      }
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: error.message
    };
  }
};
