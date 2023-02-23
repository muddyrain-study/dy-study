const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("myschooldb", "root", "mm001030", {
  host: "localhost",
  dialect: "mysql",
  // logging: null,
});

module.exports = sequelize;
