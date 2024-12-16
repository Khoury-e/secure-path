var express = require('express');
var router = express.Router();
const authController = require("../../controllers/AuthController");
const validator = require("../../helpers/validator.helper");

// all auth routes
router.post("/login", authController.login);
router.post("/signup", validator.newUser, authController.signup);
router.get("/logout", authController.logout);
router.post("/verify-email/:userId/:token", authController.verifyEmail);
router.get("/isLoggedIn", authController.isLoggedIn);
router.get("/isVerified", authController.isVerifiedAccount);

module.exports = router;