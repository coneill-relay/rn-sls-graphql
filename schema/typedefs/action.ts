import { gql } from "apollo-server-lambda";

export default gql`
  type Action {
    description: String!
    id: String!
    label: String!
    show: Boolean
    type: String!
    value: String!
  }
`;
