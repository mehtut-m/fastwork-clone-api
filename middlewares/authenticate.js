const passport = require("passport");

module.exports.authenticate = passport.authenticate("jwt", { session: false });

module.exports.generateToken = async (req, res, next) => {
  try {
    if (req.user) {
      const { id, email, firstName, lastName, profileImg } = req.user;
      const token = jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
        expiresIn: 60 * 60 * 24 * 30,
      });
      return res
        .status(200)
        .json({ token, user: { id, firstName, email, lastName, profileImg } });
    }
    res.status(401).json({ message: "You must login first" });
  } catch (err) {
    next(err);
  }
};
