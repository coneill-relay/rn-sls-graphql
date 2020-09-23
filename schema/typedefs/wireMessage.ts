import { gql } from "apollo-server-lambda";

export default gql`
  type WireMessage {
    actions: [Action]
    alternate_text: String!
    branding: String!
    is_alternate_message: Boolean
    is_shown: Boolean
    product_group: String!
    product_group_id: String!
    show_banner: Boolean
    text: String!
  }
`;
