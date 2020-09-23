import { gql } from "apollo-server-lambda";

export default gql`
  type Consent {
    in_wire_upgrade: InWireUpgrade
  }
`;
