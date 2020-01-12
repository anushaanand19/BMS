const { uuid } = require("uuidv4");
const db = require("../utils/database");

module.exports = class Product {
  constructor(name, price, author, description, image) {
    this.name = name;
    this.price = price;
    this.author = author;
    this.description = description;
    this.image = image;
  }

  save() {
    this.id = uuid();
    return db.execute(
      "INSERT INTO products (name, price, author, description, image) VALUES (?,?,?,?,?) ",
      [this.name, this.price, this.author, this.description, this.image]
    );
  }

  static updateProduct(name, price, author, description, image, id) {
    return db.execute(
      "UPDATE products SET name = ?, price = ?, author = ?, description = ?, image = ? WHERE id = ? ",
      [name, price, author, description, image, id]
    );
  }

  static deleteProduct(id) {
    return db.execute("DELETE from PRODUCTS WHERE id = ? ", [id]);
  }
  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }

  static findByID(id) {
    return db.execute("SELECT * FROM products WHERE products.id = ?", [id]);
  }
};
