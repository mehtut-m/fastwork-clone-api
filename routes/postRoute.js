const express = require("express");
const authenticate = require("../middlewares/authenticate");
const upload = require("../middlewares/upload");
const {
  getAllPost,
  selectCategory,
  addNameAndDescription,
  addImage,
  addInstruction,
  addPackage,
  getPostById,
  getPostByCategories,
  getPostBySubCategories,
  toggleIsActivePost,
  getPostByFilter,
} = require("../controllers/postController");

const router = express.Router();

// TODO: Get all post
router.get("/", getAllPost);

// TODO: Get post by filter
router.get("/filter/:id", getPostByFilter);

// TODO: Get post by id
router.get("/:id", getPostById);

// TODO: Get post by category id
router.get("/categories/:categoriesId", getPostByCategories);

// TODO: Get post by sub category id
router.get("/subCategories/:subCategoriesId", getPostBySubCategories);

// TODO: Select category and sub category
router.post("/category", authenticate, selectCategory);

// TODO: Add name and description
router.patch("/name-description", authenticate, addNameAndDescription);

// TODO: Add image
router.post("/image", authenticate, upload.array("image", 12), addImage);

// TODO: Add addInstruction
router.patch("/instruction", authenticate, addInstruction);

// TODO: Add Package
router.post("/package", authenticate, addPackage);

// TODO: Toggle is active
router.patch("/toggle/:postId", authenticate, toggleIsActivePost);

module.exports = router;
