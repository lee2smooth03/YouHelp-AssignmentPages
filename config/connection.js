var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  port: 3306 || 8080,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;