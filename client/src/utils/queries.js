import { gql } from "@apollo/client";

export const QUERY_PRODUCTS = gql`
  # create a GraphQL query to be executed by Apollo Client
  query getProductss {
    products {
      name
      price
      image
    }
  }
`;
