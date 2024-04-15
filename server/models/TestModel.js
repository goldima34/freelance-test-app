const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Test = sequelize.define("User", {
  UserId: { type: DataTypes.INTEGER },
  Title: { type: DataTypes.STRING },
  TimeToComplete: { type: DataTypes.STRING },
});

module.exports = Test;
