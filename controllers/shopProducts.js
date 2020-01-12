const Product = require("../models/product");

exports.index = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.render("shop/index", {
        prods: rows,
        path: "/",
        pageTitle: "Products"
      });
    })
    .catch(err => console.log(err));
};

exports.getProduct = (req, res, next) => {
  const prodID = req.params.productID;
  Product.findByID(prodID)
    .then(([prod, fieldData]) => {
      res.render("shop/product-detail", {
        path: "/products",
        product: prod[0],
        pageTitle: prod.name
      });
    })
    .catch(err => console.log(err));
};
