const express = require("express");
const {
  register,
  login,
  signinWithGoogle,
  signinWithFB,
} = require("../controllers/authController");
const { generateToken } = require("../middlewares/authenticate");

const router = express.Router();

// Register with fastwork-clone
router.post("/register", register);

// Login with fastwork-clone
router.post("/login", login);

// Login with google
router.post("/login/google", signinWithGoogle, generateToken);

// Login with facebook
router.post("/login/fb", signinWithFB, generateToken);

module.exports = router;
