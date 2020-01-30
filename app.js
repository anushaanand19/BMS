const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const Product = require("./models/product");
const User = require("./models/user");
const Cart = require("./models/cart");
const CartItem = require("./models/cart-item");
const app = express();
const sequelize = require("./utils/database");
const Sequelize = require("sequelize");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "pug");
app.set("views", "views");

app.use((req, res, next) => {
  User.findByPk(1)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

app.use(adminData);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.render("404", { pageTitle: "Nothing found here" });
});

sequelize
  .sync()
  .then(result => {
    return User.findByPk(1);
  })
  .then(user => {
    if (!user) {
      return User.create({
        name: "Anusha",
        email: "anusha.anand@gmail.com"
      });
    }
    return user;
  })
  .then(user => {
    user.getCart().then(cart => {
      if (!cart) {
        return user.createCart();
      }
      return cart;
    });
  })
  .then(cart => {
    app.listen(3000);
  })
  .catch(err => console.log(err));
