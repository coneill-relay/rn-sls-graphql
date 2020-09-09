import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const get = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: event.pathParameters }),
  };
};
