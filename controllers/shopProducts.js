const Product = require("../models/product");

exports.index = (req, res, next) => {
  const products = Product.fetchAll();
  console.log("shop", products);
  res.render("shop/index", {
    prods: products,
    path: "/",
    pageTitle: "Welcome to the Bookstore"
  });
};

exports.shopAllProducts = (req, res, next) => {
  const products = Product.fetchAll();
  res.render("shop/product-list", {
    prods: products,
    path: "/product-list",
    pageTitle: "Products"
  });
};

exports.cart = (req, res, next) => {
  const products = Product.fetchAll();
  res.render("shop/cart", {
    prods: products,
    path: "/cart",
    pageTitle: "Cart"
  });
};

exports.checkout = (req, res, next) => {
  const products = Product.fetchAll();
  res.render("shop/checkout", { prods: products, path: "/checkout" });
};
