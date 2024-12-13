const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Advanced Chat App",
      version: "1.0.0",
      description:
        "Advanced chat app with Add user, chat ,group chat , chat with Ai options are present",
    },
    servers: [
      { url: "http://localhost:8000 /*" }, //you can change you server url
    ],
  },

  apis: ["./Routes/*.js"],
};

module.exports = options;
