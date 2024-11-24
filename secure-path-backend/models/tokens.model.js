const mongoose = require("mongoose")

const TokensSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    token: String
});

module.exports = new mongoose.model("Token", TokensSchema);