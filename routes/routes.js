const express = require("express");
const app = express();
const router = express.Router();
const HomeController = require("../controller/HomeController");
const UserController = require("../controller/UserController");

router.get("/", HomeController.welcome);
router.get("/show", UserController.showAll);
router.post("/user", UserController.createUser);

module.exports = router;
