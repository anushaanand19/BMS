const mysql = require("mysql2");

const Pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-js-practice",
  password: ""
});

module.exports = Pool.promise();
