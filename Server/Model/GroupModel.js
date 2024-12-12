const mongoose = require("mongoose")

const GroupSchema = new mongoose.Schema({
    profile: String,
    groupname: String,
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "message"
        }
    ],
})

const GroupModel = mongoose.model("Group", GroupSchema)
module.exports = GroupModel