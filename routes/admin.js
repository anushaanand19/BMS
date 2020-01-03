const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminProduct");

router.get("/admin/add-product", adminController.getAddProduct);
router.get("/admin/product", adminController.getEditProduct);
router.post("/admin/product", adminController.products);

module.exports = router;
