const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/products");

router.get("/admin/add-product", ProductController.getAddProduct);

router.post("/admin/product", ProductController.postAddProduct);

module.exports = router;
