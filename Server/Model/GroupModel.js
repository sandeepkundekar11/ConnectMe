const mongoose = require("mongoose")

const GroupSchema = new mongoose.Schema({
    profile: String,
    groupname: String,
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "message"
        }
    ],
})

const GroupModel = mongoose.model("group", GroupSchema)
module.exports = GroupModel