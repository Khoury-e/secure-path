const mongoose = require("mongoose")

const UserSubmissionSchema = mongoose.Schema({
    module: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Module"
    },
    exercise: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Excercise"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    submissionDate: Date,
    submissionSuccess: Boolean
});

module.exports = new mongoose.model("UserSubmission", UserSubmissionSchema);