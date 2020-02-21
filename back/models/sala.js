const Sequelize = require("sequelize");

const db = require("../database/db");

module.exports = db.sequelize.define("sala", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: Sequelize.STRING
  },
  descripcion: {
    type: Sequelize.STRING
  }
});