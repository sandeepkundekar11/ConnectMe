const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    profile: {
        type: String,
        default: null
    },
    name: String,
    email: String,
    password: String,
    bio: String,
    privacy: {
        type: Boolean,
        default: false
    },
    groups: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Group",
        }
    ],
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",

    }],
    aiChat: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Aichat",
            default: []
        }
    ]
})

const UserModel = mongoose.model("User", UserSchema)
module.exports = UserModel