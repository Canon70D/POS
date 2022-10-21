const router = require("express").Router();

const productRoute = require("./productRoute");

router.use("/products", productRoute);

module.exports = router;
