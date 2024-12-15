const mongoose = require("mongoose")

const MessageSchema = new mongoose.Schema({
    content: String,
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    time: {
        type: Date,
        default: Date.now
    },
})

const MessageModel = mongoose.model("message", MessageSchema)

module.exports = MessageModel