var express = require('express');
var router = express.Router();
const ModuleController = require("../../controllers/ModuleController");
const authMiddleware = require("../../middlewares/auth.middlewares");
// all routes
router.post("/add/module", authMiddleware.isAdmin, ModuleController.addModule);

module.exports = router;