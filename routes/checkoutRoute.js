const express = require('express');
const upload = require('../middlewares/upload');
const { checkOutCreditCard } = require('../controllers/checkoutController');
const { createOrder } = require('../controllers/orderController');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

// Register with fastwork-clone
router.post(
  '/',
  authenticate,
  upload.array('image', 3),
  checkOutCreditCard,
  createOrder
);

module.exports = router;
