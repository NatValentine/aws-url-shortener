import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const db = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const shortId = Math.random().toString(36).substring(2, 8);

    await db.send(new PutCommand({
      TableName: "urls",
      Item: {
        id: shortId,
        originalUrl: body.url,
        createdAt: Date.now()
      }
    }));

    return {
      statusCode: 200,
      body: JSON.stringify({ shortUrl: shortId })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
