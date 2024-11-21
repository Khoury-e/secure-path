const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    email: String,
    password: String,
    username: String,
    fullname: String,
    createdAt: Date,
    updatedAt: Date,
    organization: String,
    userType: {
        type: String,
        enum: ["organizationAdmin", "regular_user"]
    },
    lastLogin: Date,
    deletedAt: {
        type: Date,
        require: false
    }
});

module.exports = new mongoose.model("User", UserSchema);