const fs = require("fs");
const cloudinary = require("cloudinary").v2;
const { User } = require("../models");

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
    const user = {
      id,
      firstName,
      lastName,
      email,
      telephoneNo,
      dataOfBirth,
      profileImage,
      freelanceInfoId,
      role,
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
