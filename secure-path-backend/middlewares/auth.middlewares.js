const jwt = require("jsonwebtoken");
const env = require("dotenv");
const User = require("../models/users.model");

exports.isAuth = async (req, res, next) => {
  try {
    const JWTtoken = req.cookies["token"] || req.headers['authorization']?.split(' ')[1];
  
    if (!JWTtoken) {
      return res.status(401).json({ error: "Access denied" });
    }

    const decoded = jwt.verify(JWTtoken, process.env.JWT_KEY);

    const user = await User.findOne({ email: decoded.email });

    if (!user) {
      return res.status(401).json({message: "Invalid token"});
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({message: "Invalid or expired token"});
  }
};