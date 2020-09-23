import { gql } from "apollo-server-lambda";

export default gql`
  type Client {
    id: String
    branding: Branding!
    productGroup(id: String): ProductGroup!
  }

  type Query {
    client(id: String): Client!
  }
`;
