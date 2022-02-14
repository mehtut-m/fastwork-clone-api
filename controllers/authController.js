const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

// google authen import
const { OAuth2Client, auth } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// validate email format
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// register with fastwork-clone
exports.register = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    // validate first name
    if (
      firstName === "" ||
      firstName === undefined ||
      firstName.trim() === ""
    ) {
      return res.status(400).json({ message: "first name is require" });
    }

    // validate last name
    if (lastName === "" || lastName === undefined || lastName.trim() === "") {
      return res.status(400).json({ message: "last name is require" });
    }

    // validate password
    if (password === "" || password === undefined || password.trim() === "") {
      return res.status(400).json({ message: "password is require" });
    }

    // validate confirm password
    if (
      confirmPassword === "" ||
      confirmPassword === undefined ||
      confirmPassword.trim() === ""
    ) {
      return res.status(400).json({ message: "confirm password is require" });
    }

    // validate length password
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "password must be at least 6 characters" });
    }

    // check password and confirm password is math
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ message: "password and confirmPassword did not match" });
    }

    // validate email
    if (email === "" || email === undefined || email.trim() === "") {
      return res.status(400).json({ message: "email is require" });
    }
    const isEmail = emailFormat.test(email);
    if (!isEmail) {
      return res.status(400).json({ message: "invalid email" });
    }

    // check email in data base
    if (isEmail) {
      const emailAlready = await User.findOne({ where: { email } });
      if (emailAlready) {
        return res
          .status(400)
          .json({ message: "This email is already in use" });
      }
    }

    // hasd password
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

// login with fastwork-clone
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // validate email
    if (email === "" || email === undefined || email.trim() === "") {
      return res.status(400).json({ message: "email is require" });
    }
    const isEmail = emailFormat.test(email);
    if (!isEmail) {
      return res.status(400).json({ message: "invalid email" });
    }

    // check user in data base
    let user;
    if (isEmail) {
      user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(400).json({ message: "invalid email or password" });
      }
    }

    // check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "invalid email or password" });
    }

    // create token
    const payload = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: 60 * 60 * 24 * 30,
    });
    const { id, firstName, lastName, profileImg, role } = user;
    res.status(200).json({
      message: "welcome",
      token,
      user: {
        id,
        firstName,
        lastName,
        profileImg,
        email,
        role,
      },
    });
  } catch (err) {
    next(err);
  }
};

// register with google account
exports.signinWithGoogle = async (req, res, next) => {
  try {
    const userId = req.body.userId;
    const idToken = req.body.tokenId;

    // verify google idToken
    const ticket = await client
      .verifyIdToken({
        idToken,
        audience: process.env.GOOGLE_CLIENT_ID,
      })
      .catch((err) => {
        res.status(400).json({ message: "invalid google token" });
        next(err);
      });

    const {
      email_verified,
      given_name,
      family_name,
      email,
      picture,
      sub: googleId,
    } = ticket.payload;

    // check email verified
    if (!email_verified) {
      return res
        .status(400)
        .json({ message: "Your Google account is not verified" });
    }

    const defaultUser = {
      firstName: given_name,
      lastName: family_name,
      email,
      profileImg: picture,
      googleId,
    };

    // if email is already next to login
    const findEmail = await User.findOne({ where: { email } });
    if (findEmail) {
      next();
    }

    // if new google account
    const user = await User.create({ defaultUser });
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};
