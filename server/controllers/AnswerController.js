const AnswerModel = require("../models/AnswerModel")

class AnswerController {
  async create(req, res) {
    try {
      const { QuestionId, Title, IsCorrect } = req.body;
      const Answer = await AnswerModel.create({
        QuestionId:QuestionId,
        Title: Title,
        IsCorrect: IsCorrect,
      });
      return res.json(Answer);
    } catch (error) {
      console.log(error);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.body;
      const Answer = await AnswerModel.findOneAndDelete({ id: id });
      return res.json(Answer);
    } catch (error) {
      console.log(error);
    }
  }

  async get(req,res){
    try {
      const { QuestionId } = req.body;
      const Answer = await AnswerModel.findAll({ where: {QuestionId: QuestionId} });
      return res.json(Answer);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new AnswerController()