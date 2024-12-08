const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    profile: String,
    name: String,
    email: String,
    password: String,
    bio: String,
    privacy: {
        type: Boolean,
        default: false
    },
    groups: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "group"
    }],
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }],
    aiChat: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "aichat"
        }
    ]
})

const UserModel = mongoose.model("user", UserSchema)
module.exports = UserModel