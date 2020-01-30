const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-js-practice", "root", "", {
  dialect: "mysql",
  host: "localhost"
});

module.exports = sequelize;
