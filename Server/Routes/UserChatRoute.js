const express = require("express")
const UserAuthentication = require("../Middlerwares/AuthMiddlerware")
const { AddUser, GetAvailableChats, SendMessage, GetMessages } = require("../Controller/UserChatController")

const UserChatRouter = express.Router()

UserChatRouter.put("/adduser", UserAuthentication, AddUser)  // this route is use to add the user in the users list
UserChatRouter.get("/getChatInfo", UserAuthentication, GetAvailableChats)
UserChatRouter.put("/sendMessage/:receiverId",UserAuthentication,SendMessage) // this route is use to send the message to users
UserChatRouter.get("/getMessages/:receiverId",UserAuthentication,GetMessages) // this route is use to get the all messages from the user

module.exports = UserChatRouter



