const TestModel = require("../models/TestModel");
const QuestionModel = require("../models/QuestionModel");

class TestController {
  // створюємо тест і вносим айді користувача який його створює
  async create(req, res) {
    try {
      const { UserId, Title } = req.body;
      const Test = await TestModel.create({
        UserId: UserId,
        Title: Title,
      });
      return res.json(Test);
    } catch (error) {
      console.log(error);
    }
  }
  // видаляємо
  async delete(req, res) {
    try {
      const { id } = req.body;
      const Test = await TestModel.destroy({where:{ id: id }});
      const Questions = await QuestionModel.destroy({ where: { TestId: id } });
      return res.json({Test, Questions})
    } catch (error) {
      console.log(error);
    }
  } 
  // шукаємо всі тести
  async getAll(req, res) {
    try {
      const Test = await TestModel.findAll();
      return res.json(Test);
    } catch (error) {
      console.log(error);
    }
  }
  // шукаємо тест по айді
  async get(req, res) {
    try {
      const {id} = req.query
      const Test = await TestModel.findOne({ where:{ id: id }});
      return res.json(Test);
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new TestController();
