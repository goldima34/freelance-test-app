const QuestionModel = require("../models/QuestionModel");

class QuestionController {
  // створюємо питання по айді теста
  async create(req, res) {
    try {
      const { TestId, Title } = req.body;
      const Question = await QuestionModel.create({
        TestId: TestId,
        Title: Title
      });
      return res.json(Question)
    } catch (error) {
      console.log(error);
    }
  }
  // видаляємо питання
  async delete(req, res) {
    try {
      const { id } = req.body;
      const Question = await QuestionModel.findOneAndDelete({ id: id });
      return res.json(Question);
    } catch (error) {
      console.log(error);
    }
  }
  // шукаємо питання по айді тесту
  async get(req,res) {
    try {
      const { TestId } = req.body;
      const Question = await QuestionModel.findAll({ where: {TestId: TestId} });
      return res.json(Question);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new QuestionController();
