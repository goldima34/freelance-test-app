const {Router} = require("express");
const UserController = require("../controllers/UserController");

const router = new Router();

router.post("/register", UserController.registration);
router.post("/login", UserController.login);
router.post("/changeName", UserController.changeName);
router.post("/changeEmail", UserController.changeEmail);
router.post("/changePassword", UserController.changePassword);
router.get("/get", UserController.getOne);

module.exports = router;