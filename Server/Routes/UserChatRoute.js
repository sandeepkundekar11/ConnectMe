const express = require("express")
const UserAuthentication = require("../Middlerwares/AuthMiddlerware")
const { AddUser, GetAvailableChats } = require("../Controller/UserChatController")

const UserChatRouter = express.Router()

UserChatRouter.put("/adduser", UserAuthentication, AddUser)  // this route is use to add the user in the users list
UserChatRouter.get("/getChatInfo", UserAuthentication, GetAvailableChats)

module.exports = UserChatRouter



