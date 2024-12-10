const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")
const UserModel = require("../Model/UserModel")

const UserAuthentication = asyncHandler(async (req, res, next) => {
    try {
        // taking to token from the authorization header
        let token = req.headers["authorization"].split(" ")[1]
         if (!token) {
            return res.status(401).json({ message: "Provide the token" })
        }

        // decoding the token
        let decodedUser = jwt.verify(token, process.env.SECRET_KEY)
        if (!decodedUser) {
            return res.status(401).json({ message: "User is not authorized" })
        }
        else {
            //  finding the user with this decoded id
            let decodedUserId = decodedUser.user._id
            let isUserAvailable = await UserModel.findOne({ _id: decodedUserId })
            if (!isUserAvailable) {
                return res.status(404).json({ message: "user not found" })
            }
            req.userId = decodedUserId
            next()
        }

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

module.exports = UserAuthentication