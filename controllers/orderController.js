const { Package, Post, Order } = require("../models");

// TODO: Create order
exports.createOrder = async (req, res, next) => {
  try {
    const { packageId } = req.params;

    // ? Validate package id
    if (typeof packageId !== "string" || packageId.trim() === "") {
      return res.status(400).json({ message: "package id is require" });
    }

    // ? Find package
    const package = await Package.findOne({ where: { id: packageId } });
    if (!package) {
      return res.status(400).json({ message: "package not found" });
    }

    // ? Find post
    const post = await Post.findOne({ where: { id: package.postId } });
    if (!post) {
      return res.status(400).json({ message: "post not found" });
    }

    // ? Create order
    const order = await Order.create({
      buyerId: req.user.id,
      postId: post.id,
      packageId,
      paymentId: new Date().getTime(),
      paymentDate: new Date(),
      countDuration: package.duration,
    });

    res.status(201).json({ message: "create order", order });
  } catch (err) {
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
    const { status } = req.body;

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
    if (typeof status !== "string" || status.trim() === "") {
      return res.status(400).json({ message: "status is require" });
    }

    if (status === "REJECT" && order.countDuration > 0) {
      await order.update({
        status: "PENDING",
        submitDate: null,
        countDuration: order.countDuration - 1,
      });
      res.status(200).json({ message: "Reject work", order });
      return;
    }

    if (order.countDuration < 1) {
      return res.status(200).json({ message: "You" });
    }
  } catch (err) {
    next(err);
  }
};
