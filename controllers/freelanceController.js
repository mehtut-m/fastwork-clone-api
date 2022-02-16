const fs = require("fs");
const util = require("util");
const cloudinary = require("cloudinary").v2;
const { sequelize, Address, FreelanceInfo, Bank } = require("../models");
const validator = require("validator");

// TODO: cloudinary upload file
const uploadPromise = util.promisify(cloudinary.uploader.upload);

// TODO: Register Freelance
exports.registerFreelance = async (req, res, next) => {
  const transaction = await sequelize.transaction();
  try {
    const {
      displayName,
      profileDesc,
      firstName,
      lastName,
      telephoneNo,
      citizenCardNo,
      dateOfBirth,
      address,
      subDistrict,
      district,
      province,
      postcode,
      currentAddress,
      currentSubDistrict,
      currenDistrict,
      currentProvince,
      currentPostcode,
      bankId,
      bankAccountNo,
    } = req.body;

    // ? Function validate name
    const isValidName = (name) =>
      (typeof name === "string" && validator.isAlpha(name)) ||
      /^[ก-๙]+$/gi.test(name);

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
    if (!validator.isMobilePhone(telephoneNo, "th-TH")) {
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
      return res.status(400).json({ message: "profile Desc is require" });
    }
    if (profileDesc.length < 20) {
      return res
        .status(400)
        .json({ message: "profile Desc must be at least 20 characters" });
    }

    // ? Validate Address
    const isValidAddress = (item) => {
      return (
        typeof item === "string" &&
        (validator.isAlpha(item) || /^[ก-๙]+$/gi.test(item))
      );
    };

    if (typeof address !== "string" || address.trim() === "") {
      return res.status(400).json({ message: "address is require" });
    }

    if (!isValidAddress(subDistrict)) {
      console.log("hello");
      return res.status(400).json({
        message: "sub district contains only letters (a-zA-Z) and (ก-๙)",
      });
    }

    if (!isValidAddress(district)) {
      return res
        .status(400)
        .json({ message: "district contains only letters (a-zA-Z) and (ก-๙)" });
    }

    if (!isValidAddress(province)) {
      return res
        .status(400)
        .json({ message: "province contains only letters (a-zA-Z) and (ก-๙)" });
    }

    if (typeof postcode !== "string" || postcode.trim() === "") {
      return res.status(400).json({ message: "invalid postcode" });
    }
    if (typeof currentAddress !== "string" || currentAddress.trim() === "") {
      return res.status(400).json({ message: "current address is require" });
    }

    if (!isValidAddress(currentSubDistrict)) {
      return res.status(400).json({
        message:
          "current sub district contains only letters (a-zA-Z) and (ก-๙)",
      });
    }

    if (!isValidAddress(currenDistrict)) {
      return res.status(400).json({
        message: "current district contains only letters (a-zA-Z) and (ก-๙)",
      });
    }

    if (!isValidAddress(currentProvince)) {
      return res.status(400).json({
        message: "current province contains only letters (a-zA-Z) and (ก-๙)",
      });
    }

    if (typeof currentPostcode !== "string" || currentPostcode.trim() === "") {
      return res.status(400).json({ message: "invalid current postcode" });
    }

    // * Create Citizen address
    const { id: citizenAddressId } = await Address.create(
      {
        address,
        subDistrict,
        district,
        province,
        postcode,
      },
      { transaction }
    );

    // * Create curren address
    const { id: currentAddressId } = await Address.create(
      {
        address: currentAddress ?? address,
        subDistrict: currentSubDistrict ?? subDistrict,
        district: currenDistrict ?? district,
        province: currentProvince ?? province,
        postcode: currentPostcode ?? postcode,
      },
      { transaction }
    );

    // ? Check citizen image
    if (!req.files) {
      return res.status(400).json({ message: "image is require" });
    }

    const imageWithCard = await uploadPromise(req.files.imageWithCard[0].path);
    fs.unlinkSync(req.files.imageWithCard[0].path);
    const cardImage = await uploadPromise(req.files.cardImage[0].path);
    fs.unlinkSync(req.files.cardImage[0].path);

    // ? check profile image
    if (req.files.profileImage[0]) {
      const profileImage = await uploadPromise(req.files.profileImage[0].path);
      fs.unlinkSync(req.files.profileImage[0].path);
      await req.user.update(
        { profileImage: profileImage.secure_url },
        { transaction }
      );
    }
    if (req.user.profileImage === null) {
      return res.status(400).json({ message: "profile image is require" });
    }

    // ? Validate bank
    if (typeof bankId !== "string" || bankId.trim() === "") {
      return res.status(400).json({ message: "invalid bank name" });
    }

    if (typeof bankAccountNo !== "string" || bankAccountNo.trim() === "") {
      return res.status(400).json({ message: "invalid bank account number" });
    }

    const bankName = await Bank.findOne({ where: { id: bankId } });
    if (!bankName) {
      return res.status(400).json({ message: "bank id not found" });
    }

    const bankAccountImage = await uploadPromise(
      req.files.bankAccountImage[0].path
    );
    fs.unlinkSync(req.files.bankAccountImage[0].path);

    // * Update user
    await req.user.update(
      { firstName, lastName, telephoneNo, dateOfBirth },
      { transaction }
    );

    // * Create freelance

    await FreelanceInfo.create(
      {
        userId: req.user.id,
        firstName,
        lastName,
        profileDesc,
        displayName,
        citizenCardNo,
        citizenAddressId,
        currentAddressId,
        imageWithCard: imageWithCard.secure_url,
        cardImage: cardImage.secure_url,
        bankId,
        bankAccountNo,
        bankAccountImage: bankAccountImage.secure_url,
      },
      { transaction }
    );

    await transaction.commit();

    res.status(201).json({ message: "your application has been submitted" });
  } catch (err) {
    await transaction.rollback();
    next(err);
  }
};
