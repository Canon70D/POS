const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
    subcategory: Subcategory
  }
  

  type Subcategory {
    _id: ID
    name: String
    product: Product
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

  type Query {
    categories: [Category]
    subCategoriesById(category: ID): [Subcategory]
    subcategories: [Subcategory]
    productById(subcategory: ID): [Product]
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
      category: ID
    ): Product
    removeProduct(productId: ID!): Product
    updateProduct(_id: ID!, quantity: Int!): Product
    addCategory(name: String!): Category
    removeCategory(categoryId: ID!): Category
    addSubcategory(name: String!): Subcategory
    removeSubcategory(categoryId: ID!): Subcategory
  }
`;

module.exports = typeDefs;
