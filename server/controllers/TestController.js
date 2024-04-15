const TestModel = require("../models/TestModel");

class TestController {
  async create(req, res) {
    const { UserId, Title, TimeToComplete } = req.body;
    const Test = await TestModel.create({
      UserId: UserId,
      Title: Title,
      TimeToComplete: TimeToComplete
    });
    return res.json(Test);
  }

  async delete(req, res) {
    const { id } = req.body;
    const Test = await TestModel.findOneAndDelete({ id: id });
    return res.json(Test);
  }
}
