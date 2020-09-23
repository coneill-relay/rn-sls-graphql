import { ApolloServer } from "apollo-server-lambda";
import { typeDefs, resolvers } from "../schema";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ event }) => {
    return {
      headers: {
        cookie:
          event.headers.cookie || event.headers.Cookie || event.headers.session,
      },
    };
  },
  playground: {
    endpoint: "/dev/graphql",
    settings: {
      "request.credentials": "same-origin",
    },
  },
});

exports.graphqlHandler = server.createHandler();
