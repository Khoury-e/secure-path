const mongoose = require("mongoose")

const ExcerciseSchema = mongoose.Schema({
    title: String,
    module: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Module'
    },
    createdAt:Date,
    updatedAt:Date,
    deletedAt: {
        type: Date,
        require: false
    }
});

module.exports = new mongoose.model("Excercise", ExcerciseSchema);