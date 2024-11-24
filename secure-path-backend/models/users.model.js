const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    email: String,
    password: String,
    username: String,
    fullname: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
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
    },
    isVerified: Boolean
});

module.exports = new mongoose.model("User", UserSchema);