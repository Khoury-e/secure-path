var express = require('express');
var router = express.Router();
const authController = require("../../controllers/AuthController");

// all auth routes
router.post("/login", authController.login);
router.post("/signup", authController.signup);


module.exports = router;