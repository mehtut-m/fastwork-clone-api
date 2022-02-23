const express = require("express");
const authenticate = require("../middlewares/authenticate");
const {
  createOrder,
  updateStatusToWork,
  updateStatusToReview,
  userReview,
  getOrderById,
  userApprove,
  getOrderByStatusWorking,
  getOrderByStatusReview,
  getOrderByStatusComplete,
} = require("../controllers/orderController");
const upload = require("../middlewares/upload");

const router = express.Router();

// TODO: Get order by status working
router.get(
  "/get-order-by-status-working",
  authenticate,
  getOrderByStatusWorking
);

// TODO: Get order by status review
router.get("/get-order-by-status-review", authenticate, getOrderByStatusReview);

// TODO: Get order by status complete
router.get(
  "/get-order-by-status-complete",
  authenticate,
  getOrderByStatusComplete
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
