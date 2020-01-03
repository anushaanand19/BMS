const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shopProducts");

router.get("/products/:productID", shopController.getProduct);
router.get("/products", shopController.shopAllProducts);
router.get("/cart", shopController.cart);
router.post("/cart", shopController.addToCart);
router.get("/checkout", shopController.checkout);
router.get("/", shopController.index);

module.exports = router;
