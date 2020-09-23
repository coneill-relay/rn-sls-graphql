import { gql } from "apollo-server-lambda";

export default gql`
  type LaunchedBy {
    lb_name: String!
    lb_source: String!
    portal_id: String!
  }

  type Consent {
    in_wire_upgrade: InWireUpgrade
  }

  type InWireUpgrade {
    ts_cs: String
    enabled: Boolean
    enabled_on_set_password: Boolean
  }

  type Disclaimer {
    message_details_enabled: Boolean
    wire_feed_enabled: Boolean
  }
`;
