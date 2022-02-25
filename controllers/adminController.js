const { User, FreelanceInfo } = require("../models");

// TODO: Admin approve
exports.adminApprove = async (req, res, next) => {
  try {
    const { userId } = req.params;

    if (req.user.role !== "ADMIN") {
      return res.status(403).json({ message: "you do not have permission" });
    }

    if (typeof userId !== "string" || userId.trim() === "") {
      return res.status(400).json({ message: "user id is require" });
    }

    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }

    const freelance = await FreelanceInfo.findOne({
      where: { userId, status: "SUBMIT" },
    });

    if (!freelance) {
      return res.status(400).json({ message: "freelance not found" });
    }

    if (freelance.status === "APPROVE") {
      return res
        .status(400)
        .json({ message: "this freelance status is already approve" });
    }

    freelance.update({
      status: "APPROVE",
    });

    res.status(200).json({ message: "approve freelance success" });
  } catch (err) {
    next(err);
  }
};

// TODO: Admin reject
exports.adminReject = async (req, res, next) => {
  try {
    const { userId } = req.params;
    if (req.user.role !== "ADMIN") {
      return res.status(403).json({ message: "you do not have permission" });
    }

    if (typeof userId !== "string" || userId.trim() === "") {
      return res.status(400).json({ message: "user id is require" });
    }

    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }

    const freelance = await FreelanceInfo.findOne({
      where: { userId, status: "SUBMIT" },
    });

    if (!freelance) {
      return res.status(400).json({ message: "freelance not found" });
    }

    freelance.update({
      status: "REJECT",
    });

    res.status(200).json({ message: "reject freelance success" });
  } catch (err) {
    next(err);
  }
};
