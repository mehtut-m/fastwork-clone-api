const passport = require("passport");
const jwt = require("jsonwebtoken");

module.exports = passport.authenticate("jwt", { session: false });

module.exports.generateToken = async (req, res, next) => {
  try {
    if (req.user) {
      const { id, email, firstName, lastName, profileImage } = req.user;
      const token = jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
        expiresIn: 60 * 60 * 24 * 30,
      });
      return res.status(200).json({
        token,
        user: { id, firstName, email, lastName, profileImage },
      });
    }
    res.status(401).json({ message: "You must login first" });
  } catch (err) {
    next(err);
  }
};
