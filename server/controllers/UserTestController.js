const UserTestModel = require("../models/UserTestModel");
const UserModel = require("../models/UserModel");

class UserTestController {
  //створюємо результат теста
  async create(req, res) {
    try {
      const { UserId, TestId, Time, QuestionCount, CorrectAnswerCount } =
        req.body;

      const UserTest = await UserTestModel.create({
        UserId: UserId,
        TestId: TestId,
        Time: Time,
        QuestionsCount: QuestionCount,
        CorrectAnswerCount: CorrectAnswerCount,
      });

      return res.json(UserTest);
    } catch (error) {
      console.log(error);
    }
  }
  // шукаємо всі результати
  async getAll(req, res) {
    try {
      const UserTest = await UserTestModel.findAll();
      return res.json(UserTest);
    } catch (error) {
      console.log(error);
    }
  }

  async getById(req, res) {
    try {
      const { TestId } = req.body;
      const UserTest = await UserTestModel.findAll({
        where: { TestId: TestId },
      });
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

  async findByCountTest(req, res) {
    const Users = await UserModel.findAll();
    let data = [];
    for (const user of Users) {
      const UserName = await UserModel.findOne({ where: { id: user.id } });
      const UserTest = await UserTestModel.findAll({
        where: { UserId: user.id },
      });
      if (UserTest.length)
        data.push({ name: UserName.name, count: UserTest.length });
    }

    return res.json(data);
  }

  async findByRaiting(req, res) {
    const Users = await UserModel.findAll();
    let data = [];
    for (const user of Users) {
      const UserName = await UserModel.findOne({ where: { id: user.id } });
      const UserTest = await UserTestModel.findAll({
        where: { UserId: user.id },
      });
      let correctAnswerCount = 0
      let questionsCount = 0;
      for (const test of UserTest){
        correctAnswerCount += test.CorrectAnswerCount;
        questionsCount += test.QuestionsCount;
      }

      if (UserTest.length)
        data.push({ name: UserName.name, correctAnswerCount, questionsCount });
    }

    return res.json(data);
  }
}

module.exports = new UserTestController();
