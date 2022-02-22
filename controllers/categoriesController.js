const { Categories, SubCategories } = require('../models');

// TODO: Find all categories
exports.getAllCategories = async (req, res, next) => {
  try {
    const categories = await Categories.findAll({
      where: {},
      include: [{ model: SubCategories }],
    });
    res.status(200).json({ categories });
  } catch (err) {
    next(err);
  }
};

exports.getSubCategoryById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: 'invalid id' });
    }
    const subCategory = await SubCategories.findOne({
      where: { id },
      include: { model: Categories },
    });

    res.status(200).json({ subCategory });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
