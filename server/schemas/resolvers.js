const { async } = require("rxjs");
const { User, Category, Subcategory, Product, Order } = require("../models");
const { populate } = require("../models/Category");

const resolvers = {
  Query: {

    categories: async () => {
      return await Category.find()
    },
    subCategoriesById: async (parent, { category }) => {
      return await Subcategory.find({ category })
    },

    subcategories: async () => {
      return await Subcategory.find({}).populate('category');
    },

    productById: async (parent, { subcategory }) => {
      return await Product.find({ subcategory })
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

      return await Product.find(params).populate("subcategory").populate({
        path: 'subcategory',
        populate: 'category'
      });
    },

    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate("subcategory").populate({
        path: 'subcategory',
        populate: 'category'
      });
    },
  },

  Mutation: {
    addProduct: async (parent, { name, price, stock, image, subcategory }) => {
      return Product.create({ name, price, stock, image, subcategory });
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

    addSubcategory: async (parent, { name, category }) => {
      return Subcategory.create({ name, category });
    },

    removeSubcategory: async (parent, { subcategoryId }) => {
      return Subcategory.findOneAndDelete({ _id: subcategoryId });
    },
  },
};

module.exports = resolvers;
