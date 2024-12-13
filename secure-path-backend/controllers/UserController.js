const User = require("../models/users.model");
const Module = require("../models/modules.model");
const Submission = require("../models/userSubmission.model");
const encryption = require("../helpers/encryption.helper");
const path = require("path");

exports.loadProfile = async (req,res) => {
    const userId = req.cookies["user"].id;

    if (!userId) {
        return res.status(400).json({message: "Unauthorized! Kindly, login"});
    }

    const user = await User.findOne({_id: userId});
    
    if (!user) {
        return res.status(400).json({message: "User not found"});
    }

    const userData = {
        id: user._id,
        email: user.email,
        fullname: user.fullname,
        username: user.username,
        isVerified: user.isVerified
      };

    return res.status(200).json({message: "profile loaded", profile: userData});

}

exports.loadExercise = async (req,res) => {
    let title = req.params.title;
    let difficulty = req.params.difficulty;
    let loweredTitle = title.toLowerCase();

    const module = await Module.findOne({"title":title});

    const exercise = module.exercises.find(ex => ex.difficulty === difficulty);
    
    if (!exercise) {
        return res.status(404).json({ message: 'Exercise not found' });
    }

    res.cookie("exerciseSecret", exercise.secret, {
        maxAge: 3600000,
        secure: false
    });

    res.json({
        message: 'Exercise loaded successfully',
        website: `http://localhost:80/${loweredTitle}/${difficulty}`,
    });
}

exports.changeFullName = async (req,res) => {
    const {fullname, newFullname} = req.body;

    if (fullname === newFullname) {
        return res.status(400).json({message: "Full Name cannot be the same as the current one"});
    }

    let user = await User.findOne({"fullname": newFullname});

    if (user) {
        return res.status(400).json({message: "Full name already exists"});
    } else {
        let user = await User.updateOne({"fullname":fullname}, {"fullname": newFullname});

        if (user) {
            return res.status(200).json({message: "Full name modified successfully"});
        } else {
            return res.status(400).json({message: "Could not modify full name"});
        }
    }
}

exports.changeUsername = async (req,res) => {
    const {username, newUsername} = req.body;

    if (username === newUsername) {
        return res
                .status(400)
                .json({
                    message: "Username cannot be the same as the current one"
                });
    }

    let user = await User.updateOne({"username":username}, {"username": newUsername});

    if (user) {
        return res.status(200).json({message: "Username modified successfully"});
    } else {
        return res.status(400).json({message: "Could not modify username"});
    }

}

exports.solveExercise = async (req,res) => {
    let {title, difficulty, secret} = req.body;
   
    let userId = req.cookies["user"].id;
    let success = false;
    const module = await Module.findOne({"title":title});
    
    const exercise = module.exercises.find(ex => ex.difficulty === difficulty);

    if (!exercise) {
        return res.status(404).json({message: "Exercise not found"});
    }

    const exerciseSecret = exercise.secret;
    
    if (exerciseSecret === secret) {
        success = !success
    }

    await Submission.create({
        userId: userId,
        title: title,
        difficulty: difficulty,
        submissionSuccess: success
    });

    return res.status(200).json({message: "Exercise solved!"});
}