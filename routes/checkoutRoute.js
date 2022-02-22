const express = require('express');

const { checkOutCreditCard } = require('../controllers/checkoutController');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

// Register with fastwork-clone
router.post('/', authenticate, checkOutCreditCard);

module.exports = router;
