const express = require("express");
const authenticate = require("../middlewares/authenticate");
const upload = require("../middlewares/upload");

const {
  selectCategory,
  addNameAndDescription,
  addImage,
  addInstruction,
} = require("../controllers/postController");

const router = express.Router();

// TODO: Select category and sub category
router.post("/category", authenticate, selectCategory);

// TODO: Add name and description
router.patch("/name-description", authenticate, addNameAndDescription);

// TODO: Add image
router.post("/image", authenticate, upload.array("image", 12), addImage);

// TODO: Add addInstruction
router.patch("/instruction", authenticate, addInstruction);

module.exports = router;
