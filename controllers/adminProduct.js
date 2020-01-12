const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  Product.fetchAll().then(([products]) => {
    res.render("admin/add-product", {
      path: "/admin/add-product",
      pageTitle: "Add Product"
    });
  });
};

exports.getEditProduct = (req, res, next) => {
  const prodID = req.params.productID;
  Product.findByID(prodID).then(([product]) => {
    console.log(product);
    res.render("admin/edit-product", {
      prod: product[0],
      pageTitle: "Edit Product",
      path: "/admin/edit-product"
    });
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(
    req.body.name,
    req.body.price,
    req.body.author,
    req.body.description,
    req.body.image
  );
  product.save();
  Product.fetchAll()
    .then(([products]) => {
      res.render("admin/products", {
        prods: products,
        pageTitle: "Admin Products",
        path: "/admin/products"
      });
    })
    .catch(err => console.log(err));
};

exports.products = (req, res, next) => {
  Product.fetchAll()
    .then(([prod]) => {
      res.render("admin/products", {
        prods: prod,
        pageTitle: "Admin Products",
        path: "/admin/products"
      });
    })
    .catch();
};

exports.postEditProduct = (req, res, next) => {
  Product.updateProduct(
    req.body.name,
    req.body.price,
    req.body.author,
    req.body.description,
    req.body.image,
    req.body.id
  );
  Product.fetchAll()
    .then(([products]) => {
      res.render("admin/products", {
        prods: products,
        pageTitle: "Admin Products",
        path: "/admin/products"
      });
    })
    .catch(err => console.log(err));
};

exports.deleteProduct = (req, res, next) => {
  const id = req.params.productID;
  Product.deleteProduct(id);
  res.redirect("/admin/products");
};
