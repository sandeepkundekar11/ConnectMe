const express=require("express")
const UserAuthentication = require("../Middlerwares/AuthMiddlerware")
const { AddUser } = require("../Controller/UserChatController")

const UserChatRouter=express.Router()

UserChatRouter.put("/adduser",UserAuthentication,AddUser)  // this route is use to add the user in the users list


module.exports=UserChatRouter



