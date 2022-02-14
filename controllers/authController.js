const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

exports.register = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, confirmPassword } = req.body;
    if (
      firstName === "" ||
      firstName === undefined ||
      firstName.trim() === ""
    ) {
      return res.status(400).json({ message: "first name is require" });
    }
    if (lastName === "" || lastName === undefined || lastName.trim() === "") {
      return res.status(400).json({ message: "last name is require" });
    }
    if (password === "" || password === undefined || password.trim() === "") {
      return res.status(400).json({ message: "password is require" });
    }
    if (
      confirmPassword === "" ||
      confirmPassword === undefined ||
      confirmPassword.trim() === ""
    ) {
      return res.status(400).json({ message: "confirm password is require" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "password must be at least 6 characters" });
    }
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ message: "password and confirmPassword did not match" });
    }
    if (email === "" || email.trim() === "") {
      return res.status(400).json({ message: "email is require" });
    }
    const isEmail = emailFormat.test(email);
    if (!isEmail) {
      return res.status(400).json({ message: "invalid email" });
    }
    if (isEmail) {
      const emailAlready = await User.findOne({ where: { email } });
      if (emailAlready) {
        return res
          .status(400)
          .json({ message: "This email is already in use" });
      }
    }
    const hasdedPassword = await bcrypt.hash(password, 12);
    await User.create({
      firstName,
      lastName,
      email,
      displayName: firstName,
      password: hasdedPassword,
    });
    res
      .status(201)
      .json({ message: "user created", firstName, lastName, email });
  } catch (err) {
    next(err);
  }
};
