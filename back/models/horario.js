const Sequelize = require("sequelize");

const db = require("../database/db");

module.exports = db.sequelize.define("horario", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  hora: {
    type: Sequelize.STRING
  }
});