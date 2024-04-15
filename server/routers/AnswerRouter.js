const { Router } = require("express");
const AnswerController = require("../controllers/AnswerController");

const router = new Router();

router.post("/create", AnswerController.create);
router.post("/delete", AnswerController.delete);

module.exports = router;
