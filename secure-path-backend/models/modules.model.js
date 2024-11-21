const mongoose = require("mongoose")

const ModuleSchema = mongoose.Schema({
    title: String,
    description: String,
    difficulty: {
        type: String,
        enum: ["low", "medium","hard"]
    },
    resources: [String],
    excerises: String,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: {
        type: Date,
        require: false
    }
});

module.exports = new mongoose.model("Module", ModuleSchema);