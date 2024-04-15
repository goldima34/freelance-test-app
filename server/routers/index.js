const { Router } = require('express')
const UserRouter = require("./UserRouter")
const AnswerRouter = require("./AnswerRouter")
const QuestionRouter = require("./QuestionRouter")
const TestRouter = require("./TestRouter")
const UserTestRouter = require("./UserTestRouter")

const router = new Router()

router.use('/user', UserRouter)
router.use("/answer", AnswerRouter);
router.use("/question", QuestionRouter);
router.use("/test", TestRouter);
router.use("/userTest", UserTestRouter);

module.exports = router