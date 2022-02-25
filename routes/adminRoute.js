const express = require("express");
const authenticate = require("../middlewares/authenticate");
const { adminApprove, adminReject } = require("../controllers/adminController");

const router = express.Router();

// TODO: Admin approve
router.patch("/approve/:userId", authenticate, adminApprove);

// TODO: Admin reject
router.patch("/reject/:userId", authenticate, adminReject);

module.exports = router;
