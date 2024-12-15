const mongoose = require("mongoose")
const ChatSchema = new mongoose.Schema({
    // shows chat block with latest message
    isGroup: {
        type: Boolean,
        default: false
    },
    Members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    time: {
        type: Date,
        default: Date.now
    },
    latestMessage: {
        type: String
    }
})

const ChatModel = mongoose.model("chat", ChatSchema)

module.exports = ChatModel