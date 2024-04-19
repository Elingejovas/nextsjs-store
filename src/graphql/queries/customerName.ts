import { gql } from "graphql-request";

export const customerNameQuery = gql`
  query customerName($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      firstName
      email
    }
  }
`