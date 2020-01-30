const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    path: "/admin/add-product",
    pageTitle: "Add Product"
  });
};

exports.getEditProduct = (req, res, next) => {
  const prodID = req.params.productID;
  req.user.getBooks({ where: { id: prodID } }).then(product => {
    res.render("admin/edit-product", {
      prod: product[0],
      pageTitle: "Edit Product",
      path: "/admin/edit-product"
    });
  });
};

exports.postAddProduct = (req, res, next) => {
  req.user.createBook({
    title: req.body.name,
    price: req.body.price,
    author: req.body.author,
    imageURL: req.body.image,
    description: req.body.description
  });
  res.redirect("/admin/products");
};

exports.products = (req, res, next) => {
  req.user
    .getBooks()
    .then(prod => {
      res.render("admin/products", {
        prods: prod,
        pageTitle: "Admin Products",
        path: "/admin/products"
      });
    })
    .catch();
};

exports.postEditProduct = (req, res, next) => {
  const prodID = req.body.id;
  Product.findByPk(prodID)
    .then(product => {
      (product.title = req.body.name),
        (product.price = req.body.price),
        (product.author = req.body.author),
        (product.description = req.body.description),
        (product.image = req.body.image);
      return product.save();
    })
    .then(result => {
      console.log("Product Updated!");
    })
    .catch(err => console.log(err));
  res.redirect("/admin/products");
};

exports.deleteProduct = (req, res, next) => {
  const id = req.params.productID;
  Product.findByPk(id)
    .then(product => product.destroy())
    .catch(err => console.log(err));
  res.redirect("/admin/products");
};
