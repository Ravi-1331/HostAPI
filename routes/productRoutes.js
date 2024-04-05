const express = require("express");
const router = express.Router();

//import controllers
const { getAllProducts, getAllProductsTesting } = require("../controllers/products")

//routes creation
router.get("/", getAllProducts);
router.get("/testing", getAllProductsTesting);

module.exports = router;