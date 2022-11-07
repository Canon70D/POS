const db = require("../config/connections");
const { Product, Category, Subcategory } = require("../models");

db.once("open", async () => {
  //clean databse
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Apparel" },
    { name: "Sneakers" },
    { name: "Accessories" },
  ]);

  console.log("==================");
  console.log("categories seeded");
  console.log("==================");

  await Subcategory.deleteMany();

  const subcategories = await Subcategory.insertMany([
    { 
      name: "Brand 1",
      category: categories[0]
    },
    { 
      name: "Brand 2",
      category: categories[0]
    },
    { 
      name: "Brand 3",
      category: categories[0]
    },
    { 
      name: "Module 1",
      category: categories[1]
    },
    { 
      name: "Module 2",
      category: categories[1]
    },
    { 
      name: "Module 3",
      category: categories[1]
    },
    { 
      name: "Module 4",
      category: categories[1]
    },
    { 
      name: "Brand 4",
      category: categories[2]
    },
    { 
      name: "Brand 5",
      category: categories[2]
    },
    { 
      name: "Brand 6",
      category: categories[2]
    },
  ]);

  console.log("==================");
  console.log("subcategories seeded");
  console.log("==================");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "test name",
      subcategory: subcategories[0],
      price: 100,
      stock: 10,
      image:
        "https://place-hold.it/300x300/89E7F2/000000/E3DEDE.png&text=product&italic",
    },
    {
      name: "test name 2",
      subcategory: subcategories[0],
      price: 200,
      stock: 10,
      image:
        "https://place-hold.it/300x300/89E7F2/000000/E3DEDE.png&text=product&italic",
    },
    {
      name: "test name 3",
      subcategory: subcategories[0],
      price: 300,
      stock: 10,
      image:
        "https://place-hold.it/300x300/89E7F2/000000/E3DEDE.png&text=product&italic",
    },
    {
      name: "test name 4",
      subcategory: subcategories[1],
      price: 400,
      stock: 10,
      image:
        "https://place-hold.it/300x300/89E7F2/000000/E3DEDE.png&text=product&italic",
    },
    {
      name: "test name 5",
      subcategory: subcategories[1],
      price: 500,
      stock: 10,
      image:
        "https://place-hold.it/300x300/89E7F2/000000/E3DEDE.png&text=product&italic",
    },
    {
      name: "test name 6",
      subcategory: subcategories[1],
      price: 600,
      stock: 10,
      image:
        "https://place-hold.it/300x300/89E7F2/000000/E3DEDE.png&text=product&italic",
    },
    {
      name: "test name 7",
      subcategory: subcategories[2],
      price: 700,
      stock: 10,
      image:
        "https://place-hold.it/300x300/89E7F2/000000/E3DEDE.png&text=product&italic",
    },
    {
      name: "test name 8",
      subcategory: subcategories[2],
      price: 800,
      stock: 10,
      image:
        "https://place-hold.it/300x300/89E7F2/000000/E3DEDE.png&text=product&italic",
    },
    {
      name: "test name 9",
      subcategory: subcategories[2],
      price: 900,
      stock: 10,
      image:
        "https://place-hold.it/300x300/89E7F2/000000/E3DEDE.png&text=product&italic",
    },
  ]);

  console.log("==================");
  console.log("products seeded");
  console.log("==================");

  process.exit(0);
});
