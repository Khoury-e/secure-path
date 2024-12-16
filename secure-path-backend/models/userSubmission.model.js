const mongoose = require("mongoose")

const UserSubmissionSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    title: String,
    difficulty: String,
    submissionDate: {
        type: Date,
        default: Date.now
    },
    submissionSuccess: Boolean
});

module.exports = new mongoose.model("UserSubmission", UserSubmissionSchema);