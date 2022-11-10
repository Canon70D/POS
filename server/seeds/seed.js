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
    },
    { 
      name: "Brand 2",
    },
    { 
      name: "Brand 3",
    },
    { 
      name: "Module 1",
    },
    { 
      name: "Module 2",
    },
    { 
      name: "Module 3",
    },
    { 
      name: "Module 4",
    },
    { 
      name: "Brand 4",
    },
    { 
      name: "Brand 5",
    },
    { 
      name: "Brand 6",
    },
  ]);

  let index = 0;
  for (subCat of subcategories) {
    subCat.products.push(products[index]);  
    subCat.products.push(products[index + 1]);  
    await subCat.save();
    index = index + 2; 
  }
 
  console.log("==================");
  console.log("subcategories seeded");
  console.log("==================");

  await Category.deleteMany();

  const categories = await Category.insertMany([
    { 
      name: "Apparel",
    },
    { 
      name: "Sneakers", 
    },
    { 
      name: "Accessories", 
    },
  ]);
  
  let iindex = 0;
  for (cat of categories) {
    cat.subcategories.push(subcategories[iindex]);  
    cat.subcategories.push(subcategories[iindex + 1]);  
    await cat.save();
    iindex = iindex + 2; 
  }

  console.log("==================");
  console.log("categories seeded");
  console.log("==================");

  process.exit(0);
});
