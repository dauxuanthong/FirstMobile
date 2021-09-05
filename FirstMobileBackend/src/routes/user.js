const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");

// http://localhost:3005/user/register
router.post("/register", userController.register);

module.exports = router;
