const Product = require("../models/Product");

const resolvers = {
  Query: {
    products: async () => {
      return await Product.find({});
    },
  },

  Mutation: {
    addProduct: async (parent, { name, price, stock, image }) => {
      return Product.create({ name, price, stock, image });
    },
    removeProduct: async (parent, { productId }) => {
      return Product.findOneAndDelete({ _id: productId });
    },
  },
};

module.exports = resolvers;
