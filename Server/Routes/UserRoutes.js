const express = require("express")
const UserAuthentication = require("../Middlerwares/AuthMiddlerware")
const { SignupUser, LoginUser, GetAllUser } = require("../Controller/UserController")
const UserRouter = express.Router()



UserRouter.post("/signup", SignupUser)
UserRouter.post("/login", LoginUser)
UserRouter.get("/getAllUser/:queryType", UserAuthentication, GetAllUser)

module.exports = UserRouter