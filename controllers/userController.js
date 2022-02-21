const fs = require("fs");
const cloudinary = require("cloudinary").v2;
const { User, FreelanceInfo } = require("../models");

// TODO: Get me
exports.getMe = async (req, res, next) => {
  try {
    const {
      id,
      firstName,
      lastName,
      email,
      telephoneNo,
      dataOfBirth,
      profileImage,
      freelanceInfoId, // ! Must Have?
      role,
    } = req.user;

    const freelanceInfo = await FreelanceInfo.findOne({
      where: { userId: req.user.id },
      attributes: ["displayName", "profileDesc", "createdAt", "status"],
    });
    const user = {
      id,
      firstName,
      lastName,
      email,
      telephoneNo,
      dataOfBirth,
      profileImage,
      role,
      freelanceInfoId,
      freelanceInfo,
    };
    res.status(200).json({ user });
  } catch (err) {
    next(err);
  }
};

// TODO: update profile image
exports.updateProfileImage = async (req, res, next) => {
  try {
    cloudinary.uploader.upload(req.file.path, async (err, result) => {
      if (err) return next(err);

      await User.update(
        { profileImage: result.secure_url },
        { where: { id: req.user.id } }
      );
      if (req.user.profileImage) {
        const splied = req.user.profileImage.split("/");
        cloudinary.uploader.destroy(splied[splied.length - 1].split(".")[0]);
      }
      fs.unlinkSync(req.file.path);
      res.json({
        message: "Upload profile image completed",
        profileImage: result.secure_url,
      });
    });
  } catch (err) {
    next(err);
  }
};

// TODO: Delete user
exports.deleteUser = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
