const express = require("express");
const authenticate = require("../middlewares/authenticate");
const {
  createOrder,
  updateStatusToWork,
  updateStatusToReview,
  userReview,
} = require("../controllers/orderController");
const upload = require("../middlewares/upload");

const router = express.Router();

// TODO: Create Order
router.post("/order", upload.array("image", 12), authenticate, createOrder);

// TODO: Freelance update status order to work
router.patch("/update-status-work/:orderId", authenticate, updateStatusToWork);

// TODO: Submit work to review
router.patch(
  "/update-status-review/:orderId",
  authenticate,
  updateStatusToReview
);

// TODO: User review
router.patch("/review/:orderId", authenticate, userReview);

module.exports = router;
