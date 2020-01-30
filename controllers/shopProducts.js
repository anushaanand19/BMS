const Product = require("../models/product");
const Cart = require("../models/cart");

exports.index = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render("shop/index", {
        prods: products,
        path: "/",
        pageTitle: "Products"
      });
    })
    .catch(err => console.log(err));
};

exports.getCart = (req, res, next) => {
  req.user
    .getCart()
    .then(cart => {
      return cart.getBooks();
    })
    .then(products => {
      res.render("shop/cart", { pageTitle: "Cart", prods: products });
    })
    .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
  const prodID = req.body.id;
  let product,
    fetchedCart,
    newQuantity = 1;
  req.user
    .getCart()
    .then(cart => {
      fetchedCart = cart;
      return cart.getBooks({ where: { id: prodID } });
    })
    .then(products => {
      if (products.length > 0) {
        product = products[0];
      }
      if (product) {
        console.log("quantity", product.cartItem.qty);
        const oldQuantity = product.cartItem.qty;
        newQuantity = oldQuantity + 1;
        return product;
      }
      return Product.findByPk(prodID);
    })
    .then(product => {
      return fetchedCart.addBooks(product, {
        through: { qty: newQuantity }
      });
    })
    .then(result => {
      res.redirect("/cart");
    })
    .catch(err => console.log(err));
};

exports.getProduct = (req, res, next) => {
  const prodID = req.params.productID;
  console.log(prodID);
  Product.findByPk(prodID)
    .then(prod => {
      console.log(prod);
      res.render("shop/product-detail", {
        path: "/products",
        product: prod,
        pageTitle: `${prod.title}`
      });
    })
    .catch(err => console.log(err));
};
