const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

// TODO: Google authen import
const { OAuth2Client, auth } = require("google-auth-library");
const { default: axios } = require("axios");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// TODO: Validate email format
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// TODO: Register with fastwork-clone
exports.register = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    // Validate first name
    if (typeof firstName !== "string" || firstName.trim() === "") {
      return res.status(400).json({ message: "first name is require" });
    }

    // Validate last name
    if (typeof lastName !== "string" || lastName.trim() === "") {
      return res.status(400).json({ message: "last name is require" });
    }

    // Validate password
    if (typeof password !== "string" || password.trim() === "") {
      return res.status(400).json({ message: "password is require" });
    }

    // Validate confirm password
    if (typeof confirmPassword !== "string" || confirmPassword.trim() === "") {
      return res.status(400).json({ message: "confirm password is require" });
    }

    // Validate length password
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "password must be at least 6 characters" });
    }

    // Check password and confirm password is math
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ message: "password and confirmPassword did not match" });
    }

    // Validate email
    if (typeof email !== "string" || email.trim() === "") {
      return res.status(400).json({ message: "email is require" });
    }
    const isEmail = emailFormat.test(email);
    if (!isEmail) {
      return res.status(400).json({ message: "invalid email" });
    }

    // Check email in data base
    if (isEmail) {
      const emailAlready = await User.findOne({ where: { email } });
      if (emailAlready) {
        return res
          .status(400)
          .json({ message: "This email is already in use" });
      }
    }

    // Hasd password
    const hashedPassword = await bcrypt.hash(password, 12);
    const createUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    // Find User
    const user = await User.findOne({
      where: { id: createUser.dataValues.id },
      attributes: {
        exclude: ["password", "facebookId", "googleId"],
      },
    });

    const payload = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
    };

    // Create token
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: 60 * 60 * 24 * 30,
    });

    res.status(201).json({ message: "user created", token, user });
  } catch (err) {
    next(err);
  }
};

// TODO: Login with fastwork-clone
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validate email
    if (typeof email !== "string" || email.trim() === "") {
      return res.status(400).json({ message: "email is require" });
    }
    const isEmail = emailFormat.test(email);
    if (!isEmail) {
      return res.status(400).json({ message: "invalid email" });
    }

    // Check user in data base
    let user;
    if (isEmail) {
      user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(400).json({ message: "invalid email or password" });
      }
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "invalid email or password" });
    }

    // Create token
    const payload = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: 60 * 60 * 24 * 30,
    });
    const { id, firstName, lastName, profileImage, role } = user;
    res.status(200).json({
      message: "welcome",
      token,
      user: {
        id,
        firstName,
        lastName,
        profileImage,
        email,
        role,
      },
    });
  } catch (err) {
    next(err);
  }
};

// TODO: Register with google account
exports.signinWithGoogle = async (req, res, next) => {
  try {
    const idToken = req.body.tokenId;

    console.log(idToken);
    // Verify google idToken
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

    // Check email verified
    if (!email_verified) {
      return res
        .status(400)
        .json({ message: "Your Google account is not verified" });
    }

    const hashedPassword = await bcrypt.hash(
      email + process.env.JWT_SECRET_KEY,
      12
    );

    const defaultUser = {
      firstName: given_name,
      lastName: family_name,
      email,
      password: hashedPassword,
      profileImage: picture,
      googleId,
    };

    // If facebook email math google email
    const isEmail = await User.findOne({ where: { email, googleId } });
    if (!isEmail) {
      const checkEmail = await User.findOne({ where: { email } });
      if (checkEmail) {
        return res.status(400).json({ message: "email is already in use" });
      }
    }

    // If google id is already next to login
    let user = await User.findOne({ where: { googleId } });
    if (!user) {
      // If new google account
      user = await User.create(defaultUser);
    }
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

// TODO: Login with facebook
exports.signinWithFB = async (req, res, next) => {
  try {
    const { accessToken } = req.body;

    const response = await axios
      .get(
        `https://graph.facebook.com/v12.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${process.env.FB_CLIENT_ID}&client_secret=${process.env.FB_SECRET_ID}&fb_exchange_token=${accessToken}`
      )
      .catch((err) => {
        res.status(400).json({ message: "user not found" });
      });

    // If user not found
    if (response.status !== 200) {
      return res
        .status(400)
        .json({ message: "user not found or err has occurred" });
    }

    // Get user info from access token
    const {
      data: {
        id: facebookId,
        first_name: firstName,
        last_name: lastName,
        email,
        picture: {
          data: { url: profileImage },
        },
      },
    } = await axios.get(
      `https://graph.facebook.com/me?fields=id,first_name,last_name,email,picture&access_token=${response.data.access_token}`
    );

    const hashedPassword = await bcrypt.hash(
      email + process.env.JWT_SECRET_KEY,
      12
    );

    const defaultUser = {
      facebookId,
      firstName,
      lastName,
      email,
      profileImage,
      password: hashedPassword,
    };

    // If facebook email math google email
    const isEmail = await User.findOne({ where: { email, facebookId } });
    if (!isEmail) {
      const checkEmail = await User.findOne({ where: { email } });
      if (checkEmail) {
        return res.status(400).json({ message: "email is already in use" });
      }
    }

    // If facebook id is already next to login
    let user = await User.findOne({ where: { facebookId } });
    if (!user) {
      // If new facebook account
      user = await User.create(defaultUser);
    }
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};
