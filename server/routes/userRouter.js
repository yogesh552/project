const express = require("express");
const router = express.Router();
var multer = require("multer");

const userController = require("../controllers/userController");

// *********************** General Routes ****************************************
/**
 * GET /
 * Route to get the list of users.
 */
router.post("/chatbotRes_onload", userController.chatbotRes_onload);

module.exports = router;
