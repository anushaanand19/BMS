const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "pug");
app.set("views", "views");

app.use(adminData);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.send("404 page");
});
app.listen(3000);
