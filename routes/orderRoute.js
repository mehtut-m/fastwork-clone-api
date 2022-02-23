const express = require("express");
const authenticate = require("../middlewares/authenticate");
const {
  createOrder,
  updateStatusToWork,
  updateStatusToReview,
  userReview,
  getOrderById,
  userApprove,
  getOrderByStatusWorkingFromFreelance,
  getOrderByStatusReviewFromFreelance,
  getOrderByStatusCompleteFromFreelance,
  getOrderByStatusWorkingFromUser,
  getOrderByStatusReviewFromUser,
  getOrderByStatusCompleteFromUser,
} = require("../controllers/orderController");
const upload = require("../middlewares/upload");

const router = express.Router();

// TODO: Get order by status working from freelance
router.get(
  "/get-order-by-status-working-freelance",
  authenticate,
  getOrderByStatusWorkingFromFreelance
);

// TODO: Get order by status review from freelance
router.get(
  "/get-order-by-status-review-freelance",
  authenticate,
  getOrderByStatusReviewFromFreelance
);

// TODO: Get order by status complete from freelance
router.get(
  "/get-order-by-status-complete-freelance",
  authenticate,
  getOrderByStatusCompleteFromFreelance
);

// TODO: Get order by status working from user
router.get(
  "/get-order-by-status-working-user",
  authenticate,
  getOrderByStatusWorkingFromUser
);

// TODO: Get order by status review from user
router.get(
  "/get-order-by-status-review-user",
  authenticate,
  getOrderByStatusReviewFromUser
);

// TODO: Get order by status complete from user
router.get(
  "/get-order-by-status-complete-user",
  authenticate,
  getOrderByStatusCompleteFromUser
);

// TODO: Get order by id
router.get("/:orderId", authenticate, getOrderById);

// TODO: Create Order
router.post("/order", upload.array("image", 12), authenticate, createOrder);

// TODO: Freelance update status order to work
router.patch("/update-status-work/:orderId", authenticate, updateStatusToWork);

// TODO: Submit work to review
router.patch(
  "/update-status-review",
  upload.single("image"),
  authenticate,
  updateStatusToReview
);
// TODO: Order Checkout
router.post("/checkout/:id", authenticate, userReview);

// TODO: User reject
router.patch(
  "/review/reject",
  upload.single("image"),
  authenticate,
  userReview
);

// TODO: User approve
router.patch("/review/approve/:orderId", authenticate, userApprove);

module.exports = router;
