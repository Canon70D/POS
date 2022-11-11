import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($employeeId: String!, $password: String!) {
    login(employeeId: $employeeId, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_CATEGORY = gql`
  mutation AddCategory($name: String!) {
    addCategory(name: $name) {
      name
    }
  }
`;

export const REMOVE_CATEGORY = gql`
  mutation Mutation($categoryId: ID!) {
    removeCategory(categoryId: $categoryId) {
      _id
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation Mutation(
    $name: String!
    $price: Float!
    $stock: Int!
    $category: ID
  ) {
    addProduct(name: $name, price: $price, stock: $stock, category: $category) {
      name
      price
      stock
      image
      category {
        _id
      }
    }
  }
`;

export const REMOVE_PRODUCT = gql`
  mutation Mutation($productId: ID!) {
    removeProduct(productId: $productId) {
      _id
    }
  }
`;
