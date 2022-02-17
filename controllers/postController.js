const fs = require("fs");
const util = require("util");
const cloudinary = require("cloudinary").v2;
const { SubCategories, Post, PostImage } = require("../models");
const validator = require("validator");

// TODO: Function upload image to cloudinary
const uploadPromise = util.promisify(cloudinary.uploader.upload);

// TODO: Function validate name
const isValidName = (item) => {
  return (
    (typeof item === "string" && validator.isAlphanumeric(item)) ||
    /^[ก-๙]+$/gi.test(item)
  );
};

// TODO: Select category and sub category (Step 1)
exports.selectCategory = async (req, res, next) => {
  try {
    const { postId, subCategoryId } = req.body;

    // ? check Sub categories
    const subCategory = await SubCategories.findOne({
      where: { id: subCategoryId },
    });
    if (!subCategory) {
      return res.status(400).json({ message: "sub category id not found" });
    }

    const post = await findOne({ where: { id: postId } });

    if (!post) {
      post.create({ userId: req.user.id, subCategoryId });
      res.status(201).json({ message: "post create with status DRAFT", post });
    }

    if (post) {
      post.update({ subCategoryId });
      res.status(201).json({ message: "post update with status DRAFT", post });
    }
  } catch (err) {
    next(err);
  }
};

// TODO: Add name and description to post (Step 2)
exports.addNameAndDescription = async (req, res, next) => {
  try {
    const { postId, name, description } = req.body;

    // ? Validate name
    if (!isValidName(name)) {
      return res
        .status(400)
        .json({ message: "name contains only letters (a-zA-Z0-9) and (ก-๙)" });
    }

    // ? Validate description
    if (!isValidName(description)) {
      return res.status(400).json({
        message: "description contains only letters (a-zA-Z0-9) and (ก-๙)",
      });
    }

    // ? Select post for add name and description
    const post = await Post.findOne({ where: { id: postId } });
    if (!post) {
      return res.status(400).json({ message: "post id not found" });
    }

    // ? Update Post
    post.update({ name, description });
    res.status(200).json({ message: "Add name and description", post });
  } catch (err) {
    next(err);
  }
};

// TODO: Add image to post (Step 3)
exports.addImage = async (req, res, next) => {
  const transaction = await sequelize.transaction();
  try {
    const { postId } = req.body;

    // ? Select post for add name and description
    const post = await Post.findOne({ where: { id: postId } }, { transaction });
    if (!post) {
      return res.status(400).json({ message: "post id not found" });
    }

    let result = {};
    let tmp = [];

    // ? Upload image to cloudinary
    if (req.files) {
      for (const file of req.files) {
        const { path } = file;
        result = await uploadPromise(path);
        fs.unlinkSync(path);
        const postImage = await PostImage.create(
          {
            postId,
            url: result.secure_url,
          },
          { transaction }
        );
        tmp.push(postImage);
      }
    }

    await transaction.commit();
    res.status(200).json({ message: "Add image", tmp });
  } catch (err) {
    await transaction.rollback();
    next(err);
  }
};

// TODO: Add instruction (Step 4)
exports.addInstruction = async (req, res, next) => {
  try {
    const { postId, instruction } = req.body;

    // ? Select post for add name and description
    const post = await Post.findOne({ where: { id: postId } }, { transaction });
    if (!post) {
      return res.status(400).json({ message: "post id not found" });
    }

    if (!validator(instruction)) {
      return res.status(400).json({
        message: "instruction contains only letters (a-zA-Z0-9) and (ก-๙)",
      });
    }

    post.update({ instruction });
    res.status(200).json({ message: "Add instruction", post });
  } catch (err) {
    next(err);
  }
};
