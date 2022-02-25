const express = require("express");
const authenticate = require("../middlewares/authenticate");
const {
  createOrder,
  updateStatusToWork,
  updateStatusToReview,
  userReject,
  getOrderById,
  userApprove,
  getOrderByStatusFromFreelance,
  getOrderByStatusFromUser,
  getOrderDetailImage,
} = require("../controllers/orderController");
const upload = require("../middlewares/upload");

const router = express.Router();

// TODO: Get order by status from freelance
router.post(
  "/get-order-by-status-freelance",
  authenticate,
  getOrderByStatusFromFreelance
);

// TODO: Get order by status working from user
router.post(
  "/get-order-by-status-user",
  authenticate,
  getOrderByStatusFromUser
);

// TODO: Get order by id
router.get("/:orderId", authenticate, getOrderById);

// TODO: Get order detail image
router.get(
  "/order-detail-image/:orderDetailId",
  authenticate,
  getOrderDetailImage
);

// TODO: Create Order
router.post("/order", upload.array("image", 12), authenticate, createOrder);

// TODO: Freelance update status order to work
router.patch("/update-status-work/:orderId", authenticate, updateStatusToWork);

// TODO: Submit work to review
router.patch(
  "/update-status-review",
  upload.array("image", 10),
  authenticate,
  updateStatusToReview
);

// TODO: User reject
router.patch(
  "/review/reject",
  upload.array("image", 10),
  authenticate,
  userReject
);

// TODO: User approve
router.patch("/review/approve/:orderId", authenticate, userApprove);

module.exports = router;
