const express = require("express");
const UserAuthentication = require("../Middlerwares/AuthMiddlerware");
const {
  SignupUser,
  LoginUser,
  GetAllUser,
} = require("../Controller/UserController");
const UserRouter = express.Router();

/**
 * @swagger
 * /user/signup:
 *   post:
 *     summary: Signup The User
 *     tags: [signup]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 */
UserRouter.post("/signup", SignupUser);
UserRouter.post("/login", LoginUser);
UserRouter.get("/getAllUser/:queryType", UserAuthentication, GetAllUser);

module.exports = UserRouter;
