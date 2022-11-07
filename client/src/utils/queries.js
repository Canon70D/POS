import { gql } from "@apollo/client";

export const QUERY_PRODUCTS = gql`
  {
    products {
      _id
      name
      price
      stock
      image
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;
