import { gql } from "apollo-server-lambda";

export default gql`
  type Message {
    campaign: String!
    client_customer_id: String!
    client_id: String!
    client_message_tag: String!
    client_trigger_id: String!
    created_at: String!
    customer_id: String!
    customer_product_group_id: String!
    id: String!
    job_id: String!
    journey_id: String!
    journey_name: String!
    journey_product_group_id: String!
    journey_version: Int
    launched_by: LaunchedBy!
    step_id: String!
    step_name: String!
    step_nickname: String!
    trigger_id: String!
    updated_at: String!
    wire: WireMessage
    productGroup(id: String): ProductGroup!
  }

  type Query {
    localMessage(id: String): Message!
    message(id: String, clientId: String, customerId: String): Message!
  }
`;
