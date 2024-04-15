const QuestionModel = require("../models/QuestionModel");

class QuestionController {
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

  async delete(req, res) {
    try {
      const { id } = req.body;
      const Question = await QuestionModel.findOneAndDelete({ id: id });
      return res.json(Question);
    } catch (error) {
      console.log(error);
    }
  }

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
