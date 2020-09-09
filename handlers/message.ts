import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import cuid from "cuid";
import couchbase from "couchbase";

const db = couchbase
  .connect("couchbase://localhost?network=external", {
    username: "admin",
    password: "password",
  })
  .then((cluster) => cluster.bucket("messages"))
  .then((bucket) => bucket.defaultCollection())
  .catch((e) => {
    console.log(e);
    throw e;
  });

export const get = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const messages = await db.then((collection) =>
    collection.get(`message::${event.pathParameters?.id}`)
  );
  return {
    statusCode: 200,
    body: JSON.stringify({ message: messages }),
  };
};

export const post = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  let id = cuid();
  await db.then((collection) =>
    collection.upsert(`message::${id}`, event.body)
  );
  return {
    statusCode: 200,
    body: JSON.stringify({ id }),
  };
};
