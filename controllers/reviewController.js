const { Order, Review } = require("../models");

exports.getReviewRating = async (req, res, next) => {
  try {
    const { postId } = req.params;

    // ? Validate post id
    if (typeof postId !== "string" || postId.trim() === "") {
      return res.status(400).json({ message: "post id not found" });
    }

    // ? Find rating
    const review = await Review.findAll({ postId });
    if (!review) {
      return res.status(400).json({ message: "postId not found" });
    }

    const ratings = review.map((item) => item.rating);

    const rating = (
      ratings.reduce((acc, result) => acc + result, 0) / ratings.length
    ).toFixed(1);

    res.status(200).json({ rating });
  } catch (err) {
    next(err);
  }
};

exports.createReview = async (req, res, next) => {
  try {
    const { postId, title, rating } = req.body;

    // ? Validate post id
    if (typeof postId !== "number") {
      return res.status(400).json({ message: "post id is require" });
    }

    // ? Validate rating
    if (typeof rating !== "number") {
      return res.status(400).json({ message: "rating is require" });
    }

    if (rating < 1 || rating > 5) {
      return res
        .status(400)
        .json({ message: "rating range should be between 1 - 5" });
    }

    // ? Find order
    const order = await Order.findOne({ where: { postId } });
    if (!order) {
      return res.status(400).json({ message: "order not found on this post" });
    }

    // ? Validate user
    if (req.user.id !== order.buyerId) {
      return res.status(400).json({ message: "you do not have permission " });
    }

    // * Create review
    const review = await Review.create({
      userId: req.user.id,
      postId,
      title: title ?? null,
      rating,
    });

    res.status(201).json({ message: "review success", review });
  } catch (err) {
    next(err);
  }
};

// TODO: Edit review
exports.editReview = async (req, res, next) => {
  try {
    const { reviewId, title, rating } = req.body;

    // ? Validate post id
    if (typeof reviewId !== "number") {
      return res.status(400).json({ message: "post id is require" });
    }

    // ? Find review
    const review = await Review.findOne({ where: { id: reviewId } });
    if (!review) {
      return res.status(400).json({ message: "review not found" });
    }

    // ? Validate user
    if (req.user.id !== review.userId) {
      return res.status(400).json({ message: "you do not have permission " });
    }

    if (rating) {
      // ? Validate rating
      if (typeof rating !== "number") {
        return res.status(400).json({ message: "rating is require" });
      }

      if (rating < 1 || rating > 5) {
        return res
          .status(400)
          .json({ message: "rating range should be between 1 - 5" });
      }
    }

    await review.update({
      title: title ?? review.title,
      rating: rating ?? review.rating,
    });

    res.status(200).json({ message: "update success", review });
  } catch (err) {
    next(err);
  }
};

// TODO: Delete Review
exports.deleteReview = async (req, res, next) => {
  try {
    const { reviewId } = req.params;

    // ? Validate post id
    if (typeof reviewId !== "string" || reviewId.trim() === "") {
      return res.status(400).json({ message: "post id is require" });
    }

    // ? Find review
    const review = await Review.findOne({ where: { id: reviewId } });
    if (!review) {
      return res.status(400).json({ message: "review not found" });
    }

    // ? Validate user
    if (req.user.id !== review.userId && req.user.role !== "ADMIN") {
      return res.status(400).json({ message: "you do not have permission " });
    }

    // * Delete review
    await review.destroy();

    res.status(204).json();
  } catch (err) {
    next(err);
  }
};
