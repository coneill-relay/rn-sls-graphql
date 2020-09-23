import { gql } from "apollo-server-lambda";

export default gql`
  type Branding {
    banner_s3_url: String!
    icon_s3_url: String!
  }
`;
