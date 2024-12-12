const mongoose = require("mongoose")

const AiChatSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    conversation:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"aiconversation"
        }
    ]
})

const AiChatModel=mongoose.model("Aichat",AiChatSchema)

module.exports=AiChatModel