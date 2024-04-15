const TestModel = require("../models/TestModel");

class TestController {
  async create(req, res) {
    try {
      const { UserId, Title, TimeToComplete } = req.body;
      const Test = await TestModel.create({
        UserId: UserId,
        Title: Title,
        TimeToComplete: TimeToComplete
      });
      return res.json(Test);
    } catch (error) {
      console.log(error);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.body;
      const Test = await TestModel.findOneAndDelete({ id: id });
      return res.json(Test);
    } catch (error) {
      console.log(error);
    }
  }

  async getAll(req, res) {
    try {
      const Test = await TestModel.find();
      return res.json(Test);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new TestController();
