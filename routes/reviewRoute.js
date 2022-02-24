const express = require("express");
const authenticate = require("../middlewares/authenticate");
const {
  createReview,
  editReview,
  deleteReview,
  getReviewRating,
} = require("../controllers/reviewController");

const router = express.Router();

// TODO: Get all review
router.get("/rating/:postId", getReviewRating);

// TODO: Create review
router.post("/create", authenticate, createReview);

// TODO: Edit review
router.patch("/edit", authenticate, editReview);

// TODO: Delete Review
router.delete("/:reviewId", authenticate, deleteReview);

module.exports = router;
