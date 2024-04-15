const { Router } = require("express");
const TestController = require("../controllers/TestController");

const router = new Router();

router.post("/create", TestController.create);
router.post("/delete", TestController.delete);
router.post("/getAll", TestController.getAll);

module.exports = router;
