import "server-only";

import { PutItemCommand } from "@aws-sdk/client-dynamodb";

import { dynamoClient } from "@/libs/dynamo";
import { getShortenedUrl } from "./getShortenedUrl";
import { AppError } from "@/utils/errors/appError";
import { removeSpecialChars } from "@/utils/helpers/removeSpecialChars";

export const createShortenedUrl = async (nickname: string, url: string) => {
  const urlSlug = removeSpecialChars(nickname);

  const existingUrl = await getShortenedUrl(urlSlug);

  if (existingUrl) throw new AppError({ message: "Este apelido já existe", statusCode: 409 });

  const command = new PutItemCommand({
    TableName: process.env.TABLE_NAME,
    Item: {
      id: { S: urlSlug },
      url: { S: url },
    },
  });

  await dynamoClient.send(command);

  return urlSlug;
};
