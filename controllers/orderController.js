const fs = require("fs");
const util = require("util");
const cloudinary = require("cloudinary").v2;
const {
  Package,
  Post,
  Order,
  sequelize,
  OrderImage,
  OrderDetail,
  User,
  FreelanceInfo,
  OrderDetailImage,
} = require("../models");

// TODO: Function upload image to cloudinary
const uploadPromise = util.promisify(cloudinary.uploader.upload);

// TODO: Get order by status working from freelance
exports.getOrderByStatusWorkingFromFreelance = async (req, res, next) => {
  try {
    const order = await Order.findAll({
      where: { status: "WORKING", sellerId: req.user.id },
      include: [
        {
          as: "seller",
          model: User,
          attributes: [
            "id",
            "firstName",
            "lastName",
            "telephoneNo",
            "dateOfBirth",
            "profileImage",
          ],
        },
      ],
    });

    res.status(200).json({ order });
  } catch (err) {
    next(err);
  }
};

// TODO: Get order by status review from freelance
exports.getOrderByStatusReviewFromFreelance = async (req, res, next) => {
  try {
    const order = await Order.findAll({
      where: { status: "REVIEW", sellerId: req.user.id },
      include: [
        {
          as: "seller",
          model: User,
          attributes: [
            "id",
            "firstName",
            "lastName",
            "telephoneNo",
            "dateOfBirth",
            "profileImage",
          ],
        },
      ],
    });

    res.status(200).json({ order });
  } catch (err) {
    next(err);
  }
};

// TODO: Get order by status complete from freelance
exports.getOrderByStatusCompleteFromFreelance = async (req, res, next) => {
  try {
    const order = await Order.findAll({
      where: { status: "COMPLETE", sellerId: req.user.id },
      include: [
        {
          as: "seller",
          model: User,
          attributes: [
            "id",
            "firstName",
            "lastName",
            "telephoneNo",
            "dateOfBirth",
            "profileImage",
          ],
        },
      ],
    });

    res.status(200).json({ order });
  } catch (err) {
    next(err);
  }
};

// TODO: Get order by status working from buyer
exports.getOrderByStatusWorkingFromUser = async (req, res, next) => {
  try {
    const order = await Order.findAll({
      where: { status: "WORKING", buyerId: req.user.id },
      include: [
        {
          as: "buyer",
          model: User,
          attributes: [
            "id",
            "firstName",
            "lastName",
            "telephoneNo",
            "dateOfBirth",
            "profileImage",
          ],
        },
      ],
    });

    res.status(200).json({ order });
  } catch (err) {
    next(err);
  }
};

// TODO: Get order by status review from buyer
exports.getOrderByStatusReviewFromUser = async (req, res, next) => {
  try {
    const order = await Order.findAll({
      where: { status: "REVIEW", buyerId: req.user.id },
      include: [
        {
          as: "buyer",
          model: User,
          attributes: [
            "id",
            "firstName",
            "lastName",
            "telephoneNo",
            "dateOfBirth",
            "profileImage",
          ],
        },
      ],
    });

    res.status(200).json({ order });
  } catch (err) {
    next(err);
  }
};

// TODO: Get order by status complete from user
exports.getOrderByStatusCompleteFromUser = async (req, res, next) => {
  try {
    const order = await Order.findAll({
      where: { status: "COMPLETE", buyerId: req.user.id },
      include: [
        {
          as: "buyer",
          model: User,
          attributes: [
            "id",
            "firstName",
            "lastName",
            "telephoneNo",
            "dateOfBirth",
            "profileImage",
          ],
        },
      ],
    });

    res.status(200).json({ order });
  } catch (err) {
    next(err);
  }
};

// TODO: Get order by id
exports.getOrderById = async (req, res, next) => {
  try {
    const { orderId } = req.params;

    // ? Validate order id
    if (typeof orderId !== "string" || orderId.trim() === "") {
      return res.status(400).json({ message: "order id is require" });
    }

    const order = await Order.findOne({
      where: { id: orderId },
      include: [
        {
          model: OrderDetail,
        },
      ],
    });
    if (!order) {
      return res.status(400).json({ message: "order not found" });
    }

    res.status(200).json({ order });
  } catch (err) {
    next(err);
  }
};

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

    // ? Create deadline
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + package.duration);

    // * Create order
    const order = await Order.create(
      {
        buyerId: req.user.id,
        sellerId: post.userId,
        postId: post.id,
        packageId,
        paymentId: new Date().getTime(), // ! payment
        paymentDate: new Date(),
        deadlineDate: deadline,
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
  const transaction = await sequelize.transaction();
  try {
    const { orderId, comment } = req.body;

    // ? Validate order id
    if (typeof orderId !== "string" || orderId.trim() === "") {
      return res.status(400).json({ message: "order id is require" });
    }

    // ? Find order
    const order = await Order.findOne(
      { where: { id: orderId, status: "WORKING" } },
      { transaction }
    );
    if (!order) {
      return res.status(400).json({ message: "order not found" });
    }

    // ? Find post id for find user
    const post = await Post.findOne(
      { where: { id: order.postId } },
      { transaction }
    );
    if (!post) {
      return res.status(400).json({ message: "post not found" });
    }

    // ? Find user
    if (req.user.id !== post.userId) {
      return res.status(403).json({ message: "You cannot submit this order" });
    }

    // * Update order
    await order.update({ status: "REVIEW" }, { transaction });

    const orderDetail = await OrderDetail.create(
      {
        orderId,
        userId: req.user.id,
        submitDate: new Date(),
        comment: comment ?? null,
      },
      { transaction }
    );

    // ? Upload image
    let result = {};
    let tmp = [];

    if (req.files) {
      for (const file of req.files) {
        const { path } = file;
        result = await uploadPromise(path);
        fs.unlinkSync(path);
        const orderDetailImage = await OrderDetailImage.create(
          {
            orderDetailId: orderDetail.id,
            url: result.secure_url,
          },
          { transaction }
        );
        tmp.push(orderDetailImage);
      }
    }

    await transaction.commit();
    res.status(200).json({
      message: "update status order to review",
      order,
      orderDetail,
      tmp,
    });
  } catch (err) {
    await transaction.rollback();
    next(err);
  }
};

// TODO: User reject
exports.userReject = async (req, res, next) => {
  const transaction = await sequelize.transaction();
  try {
    const { comment, orderId } = req.body;

    // ? Validate order id
    if (typeof orderId !== "string" || orderId.trim() === "") {
      return res.status(400).json({ message: "order id is require" });
    }

    // ? Find order
    const order = await Order.findOne(
      {
        where: { id: orderId, status: "REVIEW" },
      },
      { transaction }
    );
    if (!order) {
      return res.status(400).json({ message: "order not found" });
    }

    // ? Find user form post
    const user = await User.findOne(
      { where: { id: order.buyerId } },
      { transaction }
    );
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }

    // ? Validate user
    if (req.user.id !== user.id) {
      return res.status(403).json({ message: "You cannot review this order" });
    }

    // ? If user need to revise
    if (order.reviseCount > 0) {
      // * Update order
      await order.update(
        {
          status: "WORKING",
          reviseCount: order.reviseCount - 1,
        },
        { transaction }
      );

      const orderDetail = await OrderDetail.create(
        {
          orderId,
          userId: req.user.id,
          submitDate: new Date(),
          comment: comment ?? null,
        },
        { transaction }
      );

      // ? Upload image
      let result = {};
      let tmp = [];

      if (req.files) {
        for (const file of req.files) {
          const { path } = file;
          result = await uploadPromise(path);
          fs.unlinkSync(path);
          const orderDetailImage = await OrderDetailImage.create(
            {
              orderDetailId: orderDetail.id,
              url: result.secure_url,
            },
            { transaction }
          );
          tmp.push(orderDetailImage);
        }
      }

      await transaction.commit();
      return res
        .status(200)
        .json({ message: "Reject work for revise", order, orderDetail, tmp });
    }

    // ? If revise count = 0
    if (order.reviseCount < 1) {
      return res.status(200).json({ message: "You revise count not enough" });
    }
  } catch (err) {
    await transaction.rollback();
    next(err);
  }
};

// TODO: User approve
exports.userApprove = async (req, res, next) => {
  try {
    const { orderId } = req.params;

    // ? Validate order id
    if (typeof orderId !== "string" || orderId.trim() === "") {
      return res.status(400).json({ message: "order id is require" });
    }

    // ? Find order
    const order = await Order.findOne({
      where: { id: orderId, status: "REVIEW" },
    });
    if (!order) {
      return res.status(400).json({ message: "order not found" });
    }

    // ? Find user form post
    const user = await User.findOne({ where: { id: order.buyerId } });
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }

    // ? Validate user
    if (req.user.id !== user.id) {
      return res.status(403).json({ message: "You cannot review this order" });
    }

    // ? If user happy to finish order
    // * Update order
    await order.update({
      status: "COMPLETE",
      completeDate: new Date(),
    });

    res.status(200).json({ message: "Complete", order });
  } catch (err) {
    next(err);
  }
};
