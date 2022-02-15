const express = require("express");
const authenticate = require("../middlewares/authenticate");
const { registerFreelance } = require("../controllers/freelance-info");

const router = express.Router();

// register to freelance
router.post("/register", authenticate, registerFreelance);

module.exports = router;
