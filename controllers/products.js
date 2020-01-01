const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  const products = Product.fetchAll();
  res.render("admin/add-product", { path: "/admin/add-product" });
};

exports.postAddProduct = (req, res, next) => {
  const products = new Product(req.body.name);
  products.save();
  res.redirect("/");
};

exports.shopAllProducts = (req, res, next) => {
  const products = Product.fetchAll();
  res.render("shop/product-list", { prods: products, path: "/" });
};
