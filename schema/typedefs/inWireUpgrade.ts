import { gql } from "apollo-server-lambda";

export default gql`
  type InWireUpgrade {
    ts_cs: String
    enabled: Boolean
    enabled_on_set_password: Boolean
  }
`;
