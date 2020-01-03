const { uuid } = require("uuidv4");
const products = [];

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
    products.push(this);
  }

  static fetchAll() {
    return products;
  }

  static findByID(id) {
    const prodID = products.find(p => p.id === id);
    console.log("prodID", prodID);
    return prodID;
  }
};
