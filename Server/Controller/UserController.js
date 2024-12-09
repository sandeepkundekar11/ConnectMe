const AsyncHandler = require("express-async-handler")
const UserModel = require("../Model/UserModel")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const SignupUser = AsyncHandler(async (req, res) => {
    const { name, email, password, privacy } = req.body
    try {
        if (!name || !email || !password ) {
            res.status(404).json({ message: "please enter all details" })
        }
        else {
            let UserExist = await UserModel.findOne({ email: email })
            if (UserExist) {
                return res.status(200).json({ message: "user Already exist" })
            }
            else {
                //  hash password
                let hashedPassword = bcrypt.hashSync(password,12)

                //create user
                let user = await UserModel.create({
                    name,
                    email,
                    privacy,
                    password: hashedPassword
                })

                if (user) {
                    // creating token
                    let token = jwt.sign({ user }, process.env.SECRET_KEY)

                    return res.status(200).json({ user: user, token: token })
                }
            }
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})


const LoginUser = AsyncHandler(async (req, res) => {
    const { email, password } = req.body
    try {
        if (!email || !password) {
            return res.status(200).json({ message: "please enter all details" })
        }
        else {
            let userExist = await UserModel.findOne({ email: email })
            if (!userExist) {
                return res.status(404).json({ message: "user not available please signup" })
            }
            else {
                // checking password
                let checkHashpassword = bcrypt.compareSync(password, userExist.password)
                if (!checkHashpassword) {
                    return res.status(401).json({ message: "Please Enter connect password" })
                }
                else {
                    // generate jwt token
                    let token = jwt.sign({ userExist }, process.env.SECRET_KEY)
                    return res.status(200).json({ user: userExist, token: token })
                }
            }
        }

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

module.exports = {
    SignupUser,
    LoginUser
}