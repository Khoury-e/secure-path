const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

exports.sign = (email) => {
    return jwt.sign({email: email}, process.env.JWT_KEY, {
        expiresIn: "2h"
    });
};