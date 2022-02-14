const express = require("express");
const {
  register,
  login,
  signinWithGoogle,
} = require("../controllers/authController");
const { generateToken } = require("../middlewares/authenticate");

const router = express.Router();

// register with fastwork-clone
router.post("/register", register);

//login with fastwork-clone
router.post("/login", login);

//login with google
router.post("/login/google", signinWithGoogle, generateToken);

module.exports = router;
