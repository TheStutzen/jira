const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://root:postgres@localhost:5432/rush') // Example for postgres
module.exports = sequelize;