const { async } = require("rxjs");
const { User, Category, Subcategory, Product, Order } = require("../models");

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    subcategories: async () => {
      return await Subcategory.find({}.populate('category'));
    },
    products: async (parent, { subcategory, name }) => {
      const params = {};

      if (subcategory) {
        params.subcategory = subcategory;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Product.find(params).populate("subcategory");
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate("subcategory");
    },
  },

  Mutation: {
    addProduct: async (parent, { name, price, stock, image, category }) => {
      return Product.create({ name, price, stock, image, category });
    },

    removeProduct: async (parent, { productId }) => {
      return Product.findOneAndDelete({ _id: productId });
    },

    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(
        _id,
        { $inc: { quantity: decrement } },
        { new: true }
      );
    },

    addCategory: async (parent, { name }) => {
      return Category.create({ name });
    },

    removeCategory: async (parent, { categoryId }) => {
      return Category.findOneAndDelete({ _id: categoryId });
    },

    addSubcategory: async (parent, { name }) => {
      return Subcategory.create({ name });
    },

    removeSubcategory: async (parent, { subcategoryId }) => {
      return Subcategory.findOneAndDelete({ _id: subcategoryId });
    },
  },
};

module.exports = resolvers;
