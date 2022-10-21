const Product = require("../models/Product");

module.exports = {
  //get all products
  getProducts(req, res) {
    Product.find()
      .then((product) => res.json(product))
      .catch((err) => res.status(500).json(err));
  },

  //get one product
  getSingleProduct(req, res) {
    Product.findOne({ _id: req.params.productId })
      .select("-__v")
      .then((product) =>
        !product
          ? res.status(404).json({ message: "No Product Found! Check the ID" })
          : res.json(product)
      )
      .catch((err) => res.status(500).json(err));
  },

  //create a product
  createProduct(req, res) {
    Product.create(req.body)
      .then((product) => res.json(product))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  //update product
  updateProduct(req, res) {
    Product.findOneAndUpdate(
      { _id: req.params.productId },
      { $set: req.body },
      { new: true }
    )
      .then((product) =>
        !product
          ? res.status(404).json({ message: "No Product Found! Check the ID" })
          : res.json(product)
      )
      .catch((err) => res.status(500).json(err));
  },

  //delete product
  deleteProduct(req, res) {
    Product.findOneAndDelete({ _id: req.params.productId })
      .then((product) =>
        !product
          ? res.status(404).json({ message: "No Product Found! Check the ID" })
          : res.json({ message: "Product Deleted" })
      )
      .catch((err) => res.status(500).json(err));
  },
};
