const AsyncHandler = require("express-async-handler")
const UserModel = require("../Model/UserModel")
const GroupModel = require("../Model/GroupModel")
const MessageModel = require("../Model/MessageModel")

// adding user for one to one chatting

const AddUser = AsyncHandler(async (req, res) => {
    // getting the user id to add the user
    const { UserIdToAddUser } = req.body
    try {

        if (!UserIdToAddUser) {
            return res.status(404).json({ message: "user Body not found" })
        }
        // first finding wether user is already present or not
        let userAlreadyAdded = await UserModel.findOne({ _id: req.userId })
        if (userAlreadyAdded.users.includes(UserIdToAddUser)) {
            return res.status(409).json({ message: "user already added" })
        }
        // updating the present user
        let UpdatePresentUser = await UserModel.updateOne({ _id: req.userId },
            {
                $push: {
                    users: UserIdToAddUser
                }
            })

        // updating the added user

        let UpdatedAddedUser = await UserModel.updateOne({ _id: UserIdToAddUser },
            {
                $push: {
                    users: req.userId
                }
            }
        )

        if (UpdatePresentUser && UpdatedAddedUser) {
            return res.status(200).json({ message: "user added successfully" })
        }
    } catch (error) {

    }
})


// get user chats and available groups

const GetAvailableChats = AsyncHandler(async (req, res) => {
    try {


    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

module.exports = {
    AddUser,
    GetAvailableChats
}
