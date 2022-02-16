const { Categories, SubCategories } = require("../models");

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