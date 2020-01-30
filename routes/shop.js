const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shopProducts");

router.get("/cart", shopController.getCart);
router.post("/cart", shopController.postCart);
router.get("/products/:productID", shopController.getProduct);
router.get("/", shopController.index);

module.exports = router;
