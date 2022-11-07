const db = require("../config/connections");
const { Product, Category } = require("../models");

db.once("open", async () => {
  //clean databse
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Category 1" },
    { name: "Category 2" },
    { name: "Category 3" },
  ]);

  console.log("==================");
  console.log("categories seeded");
  console.log("==================");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "test name",
      category: categories[0],
      price: 100,
      stock: 10,
      image:
        "https://place-hold.it/300x300/89E7F2/000000/E3DEDE.png&text=product&italic",
    },
    {
      name: "test name 2",
      category: categories[0],
      price: 200,
      stock: 10,
      image:
        "https://place-hold.it/300x300/89E7F2/000000/E3DEDE.png&text=product&italic",
    },
    {
      name: "test name 3",
      category: categories[0],
      price: 300,
      stock: 10,
      image:
        "https://place-hold.it/300x300/89E7F2/000000/E3DEDE.png&text=product&italic",
    },
    {
      name: "test name 4",
      category: categories[1],
      price: 400,
      stock: 10,
      image:
        "https://place-hold.it/300x300/89E7F2/000000/E3DEDE.png&text=product&italic",
    },
    {
      name: "test name 5",
      category: categories[1],
      price: 500,
      stock: 10,
      image:
        "https://place-hold.it/300x300/89E7F2/000000/E3DEDE.png&text=product&italic",
    },
    {
      name: "test name 6",
      category: categories[1],
      price: 600,
      stock: 10,
      image:
        "https://place-hold.it/300x300/89E7F2/000000/E3DEDE.png&text=product&italic",
    },
    {
      name: "test name 7",
      category: categories[2],
      price: 700,
      stock: 10,
      image:
        "https://place-hold.it/300x300/89E7F2/000000/E3DEDE.png&text=product&italic",
    },
    {
      name: "test name 8",
      category: categories[2],
      price: 800,
      stock: 10,
      image:
        "https://place-hold.it/300x300/89E7F2/000000/E3DEDE.png&text=product&italic",
    },
    {
      name: "test name 9",
      category: categories[2],
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
