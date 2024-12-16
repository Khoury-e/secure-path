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
    role: String,
    deletedAt: {
        type: Date,
        require: false
    },
    isVerified: Boolean
});

module.exports = new mongoose.model("User", UserSchema);