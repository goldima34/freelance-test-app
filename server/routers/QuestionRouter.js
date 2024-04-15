const { Router } = require("express");
const QuestionController = require("../controllers/QuestionController");

const router = new Router();

router.post("/create", QuestionController.create);
router.post("/delete", QuestionController.delete);

module.exports = router;
