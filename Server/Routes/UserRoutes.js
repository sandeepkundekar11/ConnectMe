const express = require("express")
const { SignupUser, LoginUser } = require("../Controller/UserController")
const UserRouter = express.Router()



UserRouter.post("/signup", SignupUser)
UserRouter.post("/login", LoginUser)

module.exports = UserRouter