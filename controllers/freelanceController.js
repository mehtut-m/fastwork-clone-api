const { User, sequelize } = require("../models");
const validator = require("validator");

// TODO: Register Freelance
exports.registerFreelance = async (req, res, next) => {
  const transaction = await sequelize.transaction();
  try {
    const {
      userId,
      displayName,
      profileDesc,
      firstName,
      lastName,
      telephoneNo,
      citizenCardNo,
      dateOfBirth,
      citizenAddressId,
      currentAddressId,
      imageWithCard,
      CardImage,
      bankId,
      bankAccountNo,
      bankAccountImage,
      status,
    } = req.body;

    console.log(req.user);

    // Find user
    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      return res.status(400).json({ message: "user id not found" });
    }

    // ? Function validate name
    const isValidName = (name) =>
      validator.isAlpha(name) || /^[ก-๙]+$/gi.test(name);

    if (!isValidName(displayName)) {
      return res
        .status(400)
        .json({ message: "display contains only letters (a-zA-Z) and (ก-๙)" });
    }
    if (!isValidName(firstName)) {
      return res.status(400).json({
        message: "first name contains only letters (a-zA-Z) and (ก-๙)",
      });
    }
    if (!isValidName(lastName)) {
      return res.status(400).json({
        message: "last name contains only letters (a-zA-Z) and (ก-๙)",
      });
    }

    // ? Validate phone number
    if (!validator.isMobilePhone(telephoneNo, "th-Th")) {
      return res.status(400).json({ message: "invalid phone number" });
    }

    // ? Validate date of birth
    if (!validator.isDate(dateOfBirth)) {
      return res.status(400).json({ message: "invalid date of birth" });
    }

    // ? Validate citizen card no
    if (!validator.isIdentityCard(citizenCardNo, "TH")) {
      return res.status(400).json({ message: "invalid Citizen Card No" });
    }

    // ? Validate profile Desc
    if (typeof profileDesc !== "string" || profileDesc.trim() === "") {
      return res.status(400).json({ message: "profile Desc is required" });
    }
    if (profileDesc.length < 20) {
      return res
        .status(400)
        .json({ message: "profile Desc must be at least 20 characters" });
    }

    // * Update user
    user.update({ firstName, lastName, telephoneNo, dateOfBirth });
  } catch (err) {
    next(err);
    await transaction.rollback();
  }
};
