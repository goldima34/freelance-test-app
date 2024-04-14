const {Router} = require("express");
const UserController = require("../controllers/UserController");

const router = new Router();

router.post("/register", UserController.registration);
router.post("/login", UserController.login);

module.exports = router;