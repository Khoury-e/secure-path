const User = require("../models/users.model");

exports.changeUsername = (req,res) => {
    const {username, newUsername} = req.body;

    if (username === newUsername) {
        return res
                .status(401)
                .json({
                    message: "Username cannot be the same as the current one"
                });
    }

    let user = User.findOne({"username": newUsername});

    if (user) {
        return res
                .status(401)
                .json({
                    message: "Username already exists"
                })
    }
}