const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
    subcategories: [Subcategory]
  }

  type Subcategory {
    _id: ID
    name: String
    products: [Product]
  }

  type Product {
    _id: ID
    name: String
    price: Float
    stock: Int
    image: String
  }

  type User {
    _id: ID
    name: String
    employeeId: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    subCategoriesById(category: ID): [Subcategory]
    subcategories: [Subcategory]
    productById(subcategory: ID): [Product]
    productByName(name: String): [Product]
    products(category: ID, name: String): [Product]

    user: User
  }

  type Mutation {
    addProduct(
      name: String!
      price: Float!
      stock: Int!
      image: String
      subcategory: ID
    ): Product
    removeProduct(productId: ID!): Product
    updateProduct(_id: ID!, price: Float!, stock: Int!): Product
    addCategory(name: String!): Category
    removeCategory(categoryId: ID!): Category
    addSubcategory(name: String!): Subcategory
    removeSubcategory(categoryId: ID!): Subcategory
    login(employeeId: String!, password: String!): Auth
    addUser(name: String!, employeeId: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
