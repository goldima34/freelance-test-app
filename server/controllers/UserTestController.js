const UserTestModel = require("../models/UserTestModel");

class UserTestController {
  //створюємо результат теста
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
        QuestionsCount: QuestionCount,
        CorrectAnswerCount: CorrectAnswerCount
      });
      
      return res.json(UserTest);
    } catch (error) {
      console.log(error);
    }
  }
  // шукаємо всі результати
  async getAll(req, res){
    try {
      const UserTest = await UserTestModel.findAll()
      return res.json(UserTest);
    } catch (error) {
      console.log(error);
    }
  }
  // видалення
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
