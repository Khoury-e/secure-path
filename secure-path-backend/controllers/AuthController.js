const User = require("../models/users.model");
const Token = require("../models/tokens.model");
const jwtHelper = require("../helpers/jwt.helper");
const encryption = require("../helpers/encryption.helper");
const nodemailer = require("nodemailer");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(401).json({ message: "Invalid Username or password" });
    }

    const isValidPassword = encryption.comparePasswordHash(
      password,
      user.password
    );
    if (!isValidPassword) {
      return req.status(401).json({ message: "Invalid Username or password" });
    }

    const token = jwtHelper.sign(email);
    res.cookie("token", token, { httpOnly: true, maxAge: 900000 });
    res
      .status(200)
      .json({ message: "Authenticated", user: user, token: token });
  } catch (error) {
    res.status(500).json({ message: "Unable to authenticate" });
    console.log(error);
  }
};

exports.signup = async (req, res) => {
  let { email, password, fullname, username } = req.body;

  // search for user
  const user = await User.findOne({ email: email });

  // if there is already a user with that email
  if (user) {
    return res.status(401).json({
      message: "There Exists An Account With That Email",
      success: false,
    });
  }

  // setting up few default values when signing up

  const organization = "public";
  const userType = "regular_user";
  const lastLogin = null;
  const updatedAt = null;
  const deletedAt = null;

  // encrypt password
  const hash = encryption.hashPassword(password);
  password = hash;

  // create a new user record
  let NewUser = await User.create({
    email: email,
    password: password,
    username: username,
    fullname: fullname,
    organization: organization,
    userType: userType,
    lastLogin: lastLogin,
    updatedAt: updatedAt,
    deletedAt: deletedAt,
    isVerified: false
  });

  // response
  if (!NewUser) {
    return res.status(400).json({ message: "User creation failed" });
  }

  // set token and send email
  let token = jwtHelper.sign(email);

  // add token to token collection
  let tokenRecord = await Token.create({
    userId: NewUser._id,
    token: token,
  });

  if (!tokenRecord) {
    res.status(400).json({ message: "Could Not Create Token Record" });
  }

  let emailOptions = {
    from: "khouryelias04@gmail.com",
    to: email,
    subject: "Securepath Email Verification",
    text: `Hello, ${username}<br>. Please click the link below to verify your email <br> http://localhost:3000/auth/verify-email/${NewUser._id}/${token}`,
  };

  // testing purposes
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 2525,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASS,
    },
  });

  transporter.sendMail(emailOptions, function (err, info) {
    if (err) {
      console.log("Error sending the email ", err);
    } else {
      console.log(info);
    }
  });

  return res
    .status(201)
    .json({ message: "User Created Successfully", user: NewUser });
};

exports.verifyEmail = async (req, res) => {
  const userId = req.params.userId;
  const token = req.params.token;

  const user = await Token.findOne({ userId: userId });

  if (user) {
    const userToken = user.token;
    if (userToken === token) {
      User.findOneAndUpdate(
        { _id: userId },
        { $set: { isVerified: true } }
      );
    }
    return res.status(400).json({ message: "Failed To Verify Account" });
  }

  return res.status(400).json({ message: "Unable to find email" });
};
