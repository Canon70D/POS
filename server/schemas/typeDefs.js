const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    price: Float
    stock: Int
    image: String
    category: Category
  }

  type User {
    _id: ID
    name: String
    employeeId: String
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
  }

  type Mutation {
    addProduct(
      name: String!
      price: Float!
      stock: Int!
      image: String
    ): Product
    removeProduct(productId: ID!): Product
    updateProduct(_id: ID!, quantity: Int!): Product
    addCategory(name: String!): Category
    removeCategory(categoryId: ID!): Category
  }
`;

module.exports = typeDefs;
