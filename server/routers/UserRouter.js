const {Router} = require("express");
const UserController = require("../controllers/UserController");

const router = new Router();

router.post("/register", UserController.registration);
router.post("/login", UserController.login);
router.post("/changeName", UserController.login);
router.post("/changeEmail", UserController.login);
router.post("/changePassword", UserController.login);

module.exports = router;