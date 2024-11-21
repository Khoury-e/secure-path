const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

exports.sign = (email) => {
    return jwt.sign({email: email},"124gygvhb", {
        expiresIn: "2h"
    });
};