const { Router } = require("express");
const UserTestController = require("../controllers/UserTestController");

const router = new Router();

router.post("/create", UserTestController.create);
router.post("/delete", UserTestController.delete);

module.exports = router;