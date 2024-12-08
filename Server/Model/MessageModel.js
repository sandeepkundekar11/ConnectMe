const mongoose = require("mongoose")

const MessageSchema = new mongoose.Schema({
    content: String,
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    time: {
        type: Date,
        default: Date.now
    },
    seen: {
        type: Boolean,
        default: false
    }
})

const MessageModel = mongoose.model("message", MessageSchema)

module.exports = MessageModel