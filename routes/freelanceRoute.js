const express = require("express");
const authenticate = require("../middlewares/authenticate");
const { registerFreelance } = require("../controllers/freelanceController");

const router = express.Router();

// Register Freelance
router.post("/register", authenticate, registerFreelance);

module.exports = router;
