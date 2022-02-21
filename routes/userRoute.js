const express = require("express");
const {
  getMe,
  updateProfileImage,
  deleteUser,
} = require("../controllers/userController");
const authenticate = require("../middlewares/authenticate");
const upload = require("../middlewares/upload");

const router = express.Router();

// TODO: Get data user by id(authenticate)
router.get("/me", authenticate, getMe);

// TODO: Update profile image
router.patch(
  "/profile-image",
  authenticate,
  upload.single("profileImage"),
  updateProfileImage
);

// TODO: Delete user
router.delete("/delete", authenticate, deleteUser);

module.exports = router;
