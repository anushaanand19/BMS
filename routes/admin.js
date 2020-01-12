const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminProduct");

router.get("/admin/add-product", adminController.getAddProduct);
router.get(
  "/admin/products/edit-product/:productID",
  adminController.getEditProduct
);
router.get("/admin/products", adminController.products);
router.post("/admin/product", adminController.postAddProduct);
router.post("/admin/editproduct", adminController.postEditProduct);
router.get(
  "/admin/products/deleteproduct/:productID",
  adminController.deleteProduct
);

module.exports = router;
