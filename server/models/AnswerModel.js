const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Answer = sequelize.define("User", {
  QuestionId: { type: DataTypes.INTEGER },
  Title: { type: DataTypes.STRING },
  IsCorrect: { type: DataTypes.BOOLEAN }
});

module.exports = Answer;
