import { gql } from "apollo-server-lambda";

export default gql`
  type ProductGroup {
    name: String
    disclaimer: Disclaimer!
    consent: Consent
  }

  type Query {
    productGroup(id: String): ProductGroup!
  }
`;
