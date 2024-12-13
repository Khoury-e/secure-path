var express = require('express');
var router = express.Router();
const ModuleController = require("../../controllers/ModuleController");
const UserController = require("../../controllers/UserController");
const authMiddleware = require("../../middlewares/auth.middlewares");

// all user routes
router.get("/load-profile", authMiddleware.isAuth, UserController.loadProfile)
router.get("/modules/all", authMiddleware.isAuth, ModuleController.getAllModules);
router.get("/module/:title",authMiddleware.isAuth, ModuleController.getModule);
router.get("/load-exercise/:title/:difficulty", authMiddleware.isAuth, UserController.loadExercise);
router.post("/username-change", authMiddleware.isAuth, UserController.changeUsername);
router.post("/fullname-change", authMiddleware.isAuth, UserController.changeFullName);
router.post("/solve-exercise", UserController.solveExercise);

module.exports = router;