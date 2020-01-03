const Product = require("../models/product");

exports.index = (req, res, next) => {
  const products = Product.fetchAll();
  res.render("shop/index", {
    prods: products,
    path: "/",
    pageTitle: "Welcome to the Bookstore"
  });
};

exports.getProduct = (req, res, next) => {
  const prodID = req.params.productID;
  const prod = Product.findByID(prodID);
  res.render("shop/product-detail", {
    path: "/products",
    product: prod,
    pageTitle: prod.name
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
    product: products,
    path: "/cart",
    pageTitle: "Cart"
  });
};

exports.addToCart = (req, res, next) => {
  const prodID = req.body.prodID;
  const prod = Product.findByID(prodID);
  res.render("shop/cart", {
    product: prod,
    path: "/cart",
    pageTitle: "Orders"
  });
};

exports.checkout = (req, res, next) => {
  const products = Product.fetchAll();
  res.render("shop/checkout", { prods: products, path: "/checkout" });
};
