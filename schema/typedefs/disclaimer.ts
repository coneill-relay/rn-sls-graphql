import { gql } from "apollo-server-lambda";

export default gql`
  type Disclaimer {
    message_details_enabled: Boolean
    wire_feed_enabled: Boolean
  }
`;
