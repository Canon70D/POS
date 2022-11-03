const db = require("../config/connections");

const Product = require("../models/Product");
const productData = require("./productData.json");

db.once("open", async () => {
  //clean databse
  await Product.deleteMany({});

  //bulk create model
  const product = await Product.insertMany(productData);
  // await product.save();

  console.log("========");
  console.log("seeded");
  console.log("========");

  process.exit(0);
});
