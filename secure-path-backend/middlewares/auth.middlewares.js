const jwt = require("jsonwebtoken");
const env = require("dotenv");

exports.isAuth = (req, res) => {
  const JWTtoken = req.header("Authorization");

  if (!JWTtoken) {
    return res.status(401).json({ error: "Access denied" });
  }

  else {
    return res.status(200).json({success: true, authenticated: true})
  }
};
