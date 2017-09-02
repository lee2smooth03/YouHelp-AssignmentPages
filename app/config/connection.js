// ************************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO THE MYSQL RELATIONAL DATABASE
// ************************************************************************************

// ====================================================================================
// Node Module Dependencies
// ====================================================================================

var Sequelize = require("sequelize");

// ====================================================================================
// MySQL Database Connection Configuration - Using The "Sequelize" ORM
// ====================================================================================

var sequelize = new Sequelize("steam_DB", "root", "root", {
	
  host: "localhost",
  dialect: "mysql",
  port: 8080 || 8889,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// ====================================================================================
// Exports The Database Connection For Other ServerSide Files To Use
// ====================================================================================

module.exports = sequelize;