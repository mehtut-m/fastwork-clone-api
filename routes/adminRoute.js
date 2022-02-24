const express = require("express");
const authenticate = require("../middlewares/authenticate");
const { adminApprove } = require("../controllers/adminController");

const router = express.Router();

router.patch("/approve/:userId", authenticate, adminApprove);

module.exports = router;
