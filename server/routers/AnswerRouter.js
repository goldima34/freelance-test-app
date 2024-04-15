const { Router } = require("express");
const AnswerController = require("../controllers/AnswerController");

const router = new Router();

router.post("/create", AnswerController.create);
router.post("/delete", AnswerController.delete);
router.post("/get", AnswerController.get);

module.exports = router;
