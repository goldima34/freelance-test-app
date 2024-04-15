const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Question = sequelize.define("User", {
  TestId: { type: DataTypes.INTEGER },
  Title: { type: DataTypes.STRING },
});

module.exports = Question;
