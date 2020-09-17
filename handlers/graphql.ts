import axios from "axios";
const { ApolloServer, gql } = require("apollo-server-lambda");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    client(id: String): Client!
    message(id: String): Message
    productGroup(id: String): ProductGroup!
  }

  type Client {
    id: String
    branding: Branding!
    productGroup(id: String): ProductGroup!
  }

  type Branding {
    banner_s3_url: String!
    icon_s3_url: String!
  }

  type Message {
    cas: String
    content: String
  }

  type ProductGroup {
    name: String
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
    client: async (_, args, { headers }) => {
      const response = await axios.get(
        `http://config-service-api-dev.relaystaging.com:8020/platform/v3/web/app/config/client/${args.id}`,
        { headers }
      );
      return response.data.client;
    },
  },
  Client: {
    productGroup: async (parent, args, { headers }) => {
      const response = await axios.get(
        `http://config-service-api-dev.relaystaging.com:8020/platform/v3/web/app/config/client/${parent.id}/product_group/${args.id}`,
        { headers }
      );
      return response.data.product_group;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({
    event: {
      headers: { session: cookie },
    },
  }) => {
    return { headers: { cookie } };
  },
  playground: {
    endpoint: "/dev/graphql",
  },
});

exports.graphqlHandler = server.createHandler();
