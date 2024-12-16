const mongoose = require("mongoose");

const ExerciseSchema = mongoose.Schema({
    tite: String,
    difficulty: String,
    email: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    containerId: String,
    createdAt :{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Exercise", ExerciseSchema);