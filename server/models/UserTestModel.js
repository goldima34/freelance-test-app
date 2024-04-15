const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const UserTest = sequelize.define("UserTest", {
  UserId: { type: DataTypes.INTEGER },
  TestId: { type: DataTypes.INTEGER },
  Time: { type: DataTypes.STRING },
  QuestionsCount: { type: DataTypes.INTEGER },
  CorrectAnswerCount: { type: DataTypes.INTEGER }
});

module.exports = UserTest;
