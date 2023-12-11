import "server-only";

import { dynamoClient } from "@/libs/dynamo";
import { AttributeValue, GetItemCommand } from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";

export const getShortenedUrl = async (urlSlug: string) => {
  const command = new GetItemCommand({
    TableName: process.env.TABLE_NAME,
    Key: { id: { S: urlSlug } },
  });

  const response = await dynamoClient.send(command);
  console.log(response);

  if (!response.Item) return null;

  const item = unmarshall(response.Item as Record<string, AttributeValue>) as { id: string; url: string };

  return item;
};
