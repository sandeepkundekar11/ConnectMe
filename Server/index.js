const config = require("dotenv").config({ path: "./config.env" })
const mongoose = require("mongoose")
const express = require("express")
const UserRouter = require("./Routes/UserRoutes")
const { Server } = require("socket.io")
const { createServer } = require("http")
const cors = require("cors")
const app = express()
const server = createServer(app)

app.use(cors())
app.use(express.json())

// initializing the socket io server
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: true
    }
})

// mongoose atlas connection

mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log("mongoose data base is connected to the Server")
}).catch((err) => {
    console.log("mongoose data base connection problem", err.message)
})

// creating routes

app.use("/user", UserRouter)  // all user routes will come under this `user/`

// listening the ports
const PORT = process.env.PORT

server.listen(PORT, () => {
    console.log("server is running " + `http://localhost:${PORT}`)
})

