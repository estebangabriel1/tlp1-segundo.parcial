const Sequelize = require('sequelize');

const sequelize = new Sequelize("reservasa", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

require('dotenv').config();

module.exports = sequelize;
