require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: process.env.DATABASE,
  storage: process.env.DATABASE_STORAGE, 
});

module.exports = sequelize;
