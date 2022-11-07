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

type Auth {
    token: ID
    user: User
}

type Query {
  categories: [Category]
  products(category: ID, name: String): [Product]
  product(_id: ID!): Product
  user: User
}

type Mutation {
  addUser(name: String!, employeeId: String!, password: String!): Auth
  updateUser(name: String, employeeId: String, password: String): User
  updateProduct(_id: ID!, quantity: Int!): Product
  login(employeeId: String!, password: String!): Auth
}
`;

module.exports = typeDefs;
