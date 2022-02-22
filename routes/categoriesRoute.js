const express = require('express');
const {
  getAllCategories,
  getSubCategoryById,
} = require('../controllers/categoriesController');

const router = express.Router();

router.get('/', getAllCategories);
router.get('/sub-category/:id', getSubCategoryById);

module.exports = router;
