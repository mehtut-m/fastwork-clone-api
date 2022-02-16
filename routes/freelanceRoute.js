const express = require("express");
const authenticate = require("../middlewares/authenticate");
const { registerFreelance } = require("../controllers/freelanceController");
const upload = require("../middlewares/upload");

const router = express.Router();

// Register Freelance
router.post(
  "/register",
  authenticate,
  upload.fields([
    { name: "imageWithCard" },
    { name: "cardImage" },
    { name: "profileImage" },
    { name: "bankAccountImage" },
  ]),
  registerFreelance
);

module.exports = router;
