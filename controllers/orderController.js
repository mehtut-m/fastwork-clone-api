const fs = require("fs");
const util = require("util");
const cloudinary = require("cloudinary").v2;
const { Package, Post, Order, sequelize, OrderImage } = require("../models");

// TODO: Function upload image to cloudinary
const uploadPromise = util.promisify(cloudinary.uploader.upload);

// TODO: Create order
exports.createOrder = async (req, res, next) => {
  const transaction = await sequelize.transaction();
  try {
    const { packageId, requirement } = req.body;

    // ? Validate package id
    if (typeof packageId !== "string" || packageId.trim() === "") {
      return res.status(400).json({ message: "package id is require" });
    }

    // ? Validate requirement
    if (typeof requirement !== "string" || requirement.trim() === "") {
      return res.status(400).json({ message: "requirement is require" });
    }

    // ? Find package
    const package = await Package.findOne(
      { where: { id: packageId } },
      { transaction }
    );
    if (!package) {
      return res.status(400).json({ message: "package not found" });
    }

    // ? Find post
    const post = await Post.findOne(
      { where: { id: package.postId } },
      { transaction }
    );
    if (!post) {
      return res.status(400).json({ message: "post not found" });
    }

    // * Create order
    const order = await Order.create(
      {
        buyerId: req.user.id,
        postId: post.id,
        packageId,
        status: "WORKING",
        paymentId: new Date().getTime(), // ! payment
        paymentDate: new Date(),
        durationCount: package.duration,
        reviseCount: package.revise,
        requirement,
      },
      { transaction }
    );

    let result = {};
    let tmp = [];

    // ? Validate image
    if (req.files.length > 3) {
      return res.status(400).json({ message: "maximum of image equal 3 " });
    }

    // * Create order image
    if (req.files) {
      for (const file of req.files) {
        const { path } = file;
        result = await uploadPromise(path);
        fs.unlinkSync(path);
        const orderImage = await OrderImage.create(
          {
            orderId: order.id,
            url: result.secure_url,
          },
          { transaction }
        );
        tmp.push(orderImage);
      }
    }

    await transaction.commit();
    res.status(201).json({ message: "create order", order, tmp });
  } catch (err) {
    await transaction.rollback();
    next(err);
  }
};

// TODO: Freelance update status order to work
exports.updateStatusToWork = async (req, res, next) => {
  try {
    const { orderId } = req.params;

    // ? Validate order id
    if (typeof orderId !== "string" || orderId.trim() === "") {
      return res.status(400).json({ message: "order id is require" });
    }

    // ? Find order
    const order = await Order.findOne({ where: { id: orderId } });
    if (!order) {
      return res.status(400).json({ message: "order not found" });
    }

    // * update order
    await order.update({ status: "WORKING" });

    res.status(200).json({ message: "update status order to work", order });
  } catch (err) {
    next(err);
  }
};

// TODO: Submit work to review
exports.updateStatusToReview = async (req, res, next) => {
  try {
    const { orderId } = req.params;

    // ? Validate order id
    if (typeof orderId !== "string" || orderId.trim() === "") {
      return res.status(400).json({ message: "order id is require" });
    }

    // ? Find order
    const order = await Order.findOne({ where: { id: orderId } });
    if (!order) {
      return res.status(400).json({ message: "order not found" });
    }

    // * Update order
    await order.update({ status: "REVIEW", submitDate: new Date() });

    res.status(200).json({ message: "update status order to review", order });
  } catch (err) {
    next(err);
  }
};

// TODO: User review
exports.userReview = async (req, res, next) => {
  try {
    const { orderId } = req.params;
    const { revise } = req.body;

    // ? Validate order id
    if (typeof orderId !== "string" || orderId.trim() === "") {
      return res.status(400).json({ message: "order id is require" });
    }

    // ? Find order
    const order = await Order.findOne({ where: { id: orderId } });
    if (!order) {
      return res.status(400).json({ message: "order not found" });
    }

    // ? Validate status
    if (typeof revise !== "boolean") {
      return res.status(400).json({ message: "revise is require" });
    }

    // ? If user need to revise
    if (revise === true && order.reviseCount > 0) {
      // * Update order
      await order.update({
        status: "WORKING",
        submitDate: null,
        reviseCount: order.reviseCount - 1,
      });
      return res.status(200).json({ message: "Reject work for revise", order });
    }

    // ? If revise count = 0
    if (order.reviseCount < 1) {
      return res.status(200).json({ message: "You revise count not enough" });
    }

    // ? If user happy to finish order
    if (revise === false) {
      // * Update order
      await order.update({
        status: "COMPLETE",
        completeDate: new Date(),
      });
      return res.status(200).json({ message: "Complete", order });
    }
  } catch (err) {
    next(err);
  }
};
