const mongoose = require("mongoose")

const AiConversationSchema = new mongoose.Schema({
    Question: String,
    answer: String
})

const AiConversationModel = mongoose.model("aiconversation", AiConversationSchema)

module.exports = AiConversationModel