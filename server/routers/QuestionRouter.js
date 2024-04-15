const { Router } = require("express");
const QuestionController = require("../controllers/QuestionController");

const router = new Router();

router.post("/create", QuestionController.create);
router.post("/delete", QuestionController.delete);
router.post("/findQuestions", QuestionController.get)

module.exports = router;
