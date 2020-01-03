const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  const products = Product.fetchAll();
  res.render("admin/add-product", {
    path: "/admin/add-product",
    pageTitle: "Add Product"
  });
};

exports.getEditProduct = (req, res, next) => {
  const products = Product.fetchAll();
  console.log("admin", products);
  res.render("admin/products", {
    path: "/admin/product",
    prods: products,
    pageTitle: "Admin Product"
  });
};

exports.products = (req, res, next) => {
  console.log(req.body);
  const products = new Product(req.body.name);
  products.save();
  res.redirect("/");
};
