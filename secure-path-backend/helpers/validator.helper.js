const {check} = require("express-validator");

exports.newUser = [
    check("email")
        .trim()
        .isEmail()
        .withMessage("Invalid email")
        .notEmpty()
        .withMessage("Email must not be empty")
    ,
    check("password")
        .isLength({min: 12})
        .withMessage("Password Must Be 12 Characters Long")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
        .withMessage("Password must contain at least: 1 number, 1 lowercase character, 1 uppercase character and 1 special character")
        .notEmpty()
        .withMessage("Password cannot be empty")
    ,
    check("username")
        .isLength({min: 5})
        .withMessage("Username must be at least 5 characters long")
        .notEmpty()
        .withMessage("Username cannot be empty")
    ,
    check("fullname")
        .notEmpty()
        .withMessage("Full name cannot be empty")    
]