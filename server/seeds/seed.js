const db = require("../config/connections");
const { Product, Category, Subcategory } = require("../models");

db.once("open", async () => {
  //clean databse
  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "test name",
      //subcategory: subcategories[0],
      price: 100,
      stock: 10,
      image:
        "https://place-hold.it/300x300/89E7F2/000000/E3DEDE.png&text=product&italic",
    },
    {
      name: "test name 2",
      //subcategory: subcategories[0],
      price: 200,
      stock: 10,
      image:
        "https://place-hold.it/300x300/89E7F2/000000/E3DEDE.png&text=product&italic",
    },
    {
      name: "test name 3",
      //subcategory: subcategories[1],
      price: 300,
      stock: 10,
      image:
        "https://place-hold.it/300x300/89E7F2/000000/E3DEDE.png&text=product&italic",
    },
    {
      name: "test name 4",
      //subcategory: subcategories[1],
      price: 400,
      stock: 10,
      image:
        "https://place-hold.it/300x300/89E7F2/000000/E3DEDE.png&text=product&italic",
    },
    {
      name: "test name 5",
      //subcategory: subcategories[2],
      price: 500,
      stock: 10,
      image:
        "https://place-hold.it/300x300/89E7F2/000000/E3DEDE.png&text=product&italic",
    },
    {
      name: "test name 6",
      //subcategory: subcategories[2],
      price: 600,
      stock: 10,
      image:
        "https://place-hold.it/300x300/89E7F2/000000/E3DEDE.png&text=product&italic",
    },
    {
      name: "test name 7",
      //subcategory: subcategories[3],
      price: 700,
      stock: 10,
      image:
        "https://place-hold.it/300x300/89E7F2/000000/E3DEDE.png&text=product&italic",
    },
    {
      name: "test name 8",
      //subcategory: subcategories[3],
      price: 800,
      stock: 10,
      image:
        "https://place-hold.it/300x300/89E7F2/000000/E3DEDE.png&text=product&italic",
    },
    {
      name: "test name 9",
      //subcategory: subcategories[4],
      price: 900,
      stock: 10,
      image:
        "https://place-hold.it/300x300/89E7F2/000000/E3DEDE.png&text=product&italic",
    },
    {
      name: "test name 10",
      //subcategory: subcategories[4],
      price: 900,
      stock: 10,
      image:
        "https://place-hold.it/300x300/89E7F2/000000/E3DEDE.png&text=product&italic",
    },
    {
      name: "test name 11",
      //subcategory: subcategories[5],
      price: 900,
      stock: 10,
      image:
        "https://place-hold.it/300x300/89E7F2/000000/E3DEDE.png&text=product&italic",
    },
    {
      name: "test name 12",
      //subcategory: subcategories[5],
      price: 900,
      stock: 10,
      image:
        "https://place-hold.it/300x300/89E7F2/000000/E3DEDE.png&text=product&italic",
    },
    {
      name: "test name 13",
      //subcategory: subcategories[6],
      price: 900,
      stock: 10,
      image:
        "https://place-hold.it/300x300/89E7F2/000000/E3DEDE.png&text=product&italic",
    },
    {
      name: "test name 14",
      //subcategory: subcategories[6],
      price: 900,
      stock: 10,
      image:
        "https://place-hold.it/300x300/89E7F2/000000/E3DEDE.png&text=product&italic",
    },
  ]);

  console.log("==================");
  console.log("products seeded");
  console.log("==================");
  
  await Subcategory.deleteMany();

  const subcategories = await Subcategory.insertMany([
    { 
      name: "Brand 1",
      product: products[0, 1]
    },
    { 
      name: "Brand 2",
      product: products[2, 3]
    },
    { 
      name: "Module 1",
      product: products[4, 5]
    },
    { 
      name: "Module 2",
      product: products[6, 7]
    },
    { 
      name: "Module 3",
      product: products[8, 9]
    },
    { 
      name: "Brand 4",
      product: products[10, 11]
    },
    { 
      name: "Brand 5",
      product: products[12, 13]
    },
  ]);

  console.log("==================");
  console.log("subcategories seeded");
  console.log("==================");

  await Category.deleteMany();

  const categories = await Category.insertMany([
    { 
      name: "Apparel",
      subcategory: subcategories[0, 1] 
    },
    { 
      name: "Sneakers",
      subcategory: subcategories[2, 3] 
    },
    { 
      name: "Accessories",
      subcategory: subcategories[4, 5] 
    },
  ]);

  console.log("==================");
  console.log("categories seeded");
  console.log("==================");

  process.exit(0);
});
