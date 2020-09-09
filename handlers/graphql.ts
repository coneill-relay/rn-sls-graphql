import axios from "axios";
const { ApolloServer, gql } = require("apollo-server-lambda");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    message(id: String): Message
  }

  type Message {
    cas: String
    content: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    message: async (_, args) => {
      const response = await axios.get(
        `http://localhost:3000/dev/message/${args.id}`
      );
      return response.data.message;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: "/dev/graphql",
  },
});

exports.graphqlHandler = server.createHandler();
