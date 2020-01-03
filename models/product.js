const products = [];

module.exports = class Product {
  constructor(name, image, price, description) {
    this.name = name;
    this.image = image;
    this.price = price;
    this.description = description;
  }

  save() {
    products.push(this);
  }

  static fetchAll() {
    return products;
  }
};
