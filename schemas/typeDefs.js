const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Product {
    _id: ID
    name: String
    price: Float
    stock: Int
    image: String
  }

  type Query {
    products: [Product]
  }
`;

module.exports = typeDefs;
