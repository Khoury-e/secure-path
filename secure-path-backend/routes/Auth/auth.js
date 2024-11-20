var express = require('express');
var router = express.Router();
const authController = require("../../controllers/AuthController");

// all auth routes
router.get("/login", authController.login);

module.exports = router;