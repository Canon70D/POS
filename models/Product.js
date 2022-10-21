const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
    soldAt: {
      type: Date,
      required: false,
    },
    created: { type: Date, default: Date.now },
  },
  { timestamp: true }
);

const Product = model("Product", productSchema);

module.exports = Product;
