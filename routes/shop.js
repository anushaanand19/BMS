const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shopProducts");

router.get("/", shopController.index);
router.get("/products", shopController.shopAllProducts);
router.get("/cart", shopController.cart);
router.get("/checkout", shopController.checkout);

module.exports = router;
