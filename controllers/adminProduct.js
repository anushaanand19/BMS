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
  res.render("admin/products", {
    path: "/admin/product",
    prods: products,
    pageTitle: "Admin Product"
  });
};

exports.products = (req, res, next) => {
  const products = new Product(
    req.body.name,
    req.body.price,
    req.body.author,
    req.body.description,
    req.body.image
  );
  products.save();
  res.redirect("/");
};
