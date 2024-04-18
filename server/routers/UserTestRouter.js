const { Router } = require("express");
const UserTestController = require("../controllers/UserTestController");

const router = new Router();

router.post("/create", UserTestController.create);
router.post("/delete", UserTestController.delete);
router.get("/get", UserTestController.getAll);
router.post("/getById", UserTestController.getById);
router.get("/findByCountTest", UserTestController.findByCountTest);
router.get("/findByRaiting", UserTestController.findByRaiting);
router.get("/sortByTime", UserTestController.SortByTime);
router.get("/sortByRaiting", UserTestController.SortByRaiting);

module.exports = router;
