const UserTestModel = require("../models/UserTestModel");

class UserTestController {
  async create(req, res) {
    try {
      const {
        UserId,
        TestId,
        Time,
        QuestionCount,
        CorrectAnswerCount
      } = req.body;

      const UserTest = await UserTestModel.create({
        UserId: UserId,
        TestId: TestId,
        Time: Time,
        QuestionCount: QuestionCount,
        CorrectAnswerCount: CorrectAnswerCount
      });
      
      return res.json(UserTest);
    } catch (error) {
      console.log(error);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.body;
      const UserTest = await UserTestModel.findOneAndDelete({ id: id });
      return res.json(UserTest);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new UserTestController();
