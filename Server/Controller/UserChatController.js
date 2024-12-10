const AsyncHandler = require("express-async-handler")
const UserModel = require("../Model/UserModel")

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

module.exports = {
    AddUser
}
