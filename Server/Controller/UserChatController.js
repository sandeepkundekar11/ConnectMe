const AsyncHandler = require("express-async-handler");
const UserModel = require("../Model/UserModel");
const GroupModel = require("../Model/GroupModel");
const MessageModel = require("../Model/MessageModel");
const ChatModel = require("../Model/ChatModel");

// adding user for one to one chatting

const AddUser = AsyncHandler(async (req, res) => {
  // getting the user id to add the user
  const { UserIdToAddUser } = req.body;
  try {
    if (!UserIdToAddUser) {
      return res.status(404).json({ message: "user Body not found" });
    }
    // first finding wether user is already present or not
    let userAlreadyAdded = await UserModel.findOne({ _id: req.userId });
    if (userAlreadyAdded.users.includes(UserIdToAddUser)) {
      return res.status(409).json({ message: "user already added" });
    }
    // updating the present user
    let UpdatePresentUser = await UserModel.updateOne(
      { _id: req.userId },
      {
        $push: {
          users: UserIdToAddUser,
        },
      }
    );
    // updating the added user

    let UpdatedAddedUser = await UserModel.updateOne(
      { _id: UserIdToAddUser },
      {
        $push: {
          users: req.userId,
        },
      }
    );

    if (UpdatePresentUser && UpdatedAddedUser) {
      // update the ChatModel
      let newChat = await ChatModel.create({
        Members: [req.userId, UserIdToAddUser],
        latestMessage: null
      })
      return res.status(200).json({ message: "user added successfully" });
    }
  } catch (error) { }
});

// get user chats and available groups

const GetAvailableChats = AsyncHandler(async (req, res) => {
  try {
    // manupulate the user
    let MessageProfile = (await ChatModel.find({ "Members": req.userId }).populate({
      path: "Members",
      model: "User",
      select: "name profile"
    })).map((ele) => {
      if (!ele.isGroup) {
        const otherUser = ele.Members.find((member) => member._id.toString() !== req.userId);
        return {
          ...ele.toObject(),
          name: otherUser.name,
          profile: otherUser.profile,
          userId: otherUser._id
        }
      }
    })
    res.json(MessageProfile)
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

const SendMessage = AsyncHandler(async (req, res) => {
  const { receiverId } = req.params;
  const { content } = req.body;
  try {
    if (!receiverId || !content) {
      return res.status(404).json({ message: "Enter all Details" });
    }
    let message = {
      content: content,
      sender: req.userId,
      receiver: receiverId,
    };
    let createMessage = await MessageModel.create(message);

    // also update the Chat model
    let updateChat = await ChatModel.updateOne({
      Members: {
        $in: [req.userId, receiverId]
      }
    }, {
      $set: {
        latestMessage: content
      }
    })


    return res.status(200).json({ message: "message Sent successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// get  User Messages
const GetMessages = AsyncHandler(async (req, res) => {
  const { receiverId } = req.params;
  try {
    // get the selected user profile name and status
    let selectedUser = await UserModel.findOne({ _id: receiverId }, "profile name status")
    let Messages = await MessageModel.find({
      $or: [
        { sender: req.userId, receiver: receiverId },
        { sender: receiverId, receiver: req.userId },
      ],
    })
      .populate({
        path: "sender",
        model: "User",
        select: "profile, name"
      })
      .populate({
        path: "receiver",
        model: "User",
        select: "profile, name"
      });
    let userMessages = {
      user: selectedUser,
      messages: Messages
    }
    return res.status(200).json(userMessages);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = {
  AddUser,
  GetAvailableChats,
  SendMessage,
  GetMessages,
};
