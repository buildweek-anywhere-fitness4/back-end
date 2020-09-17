const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const dotenv = require("dotenv");

const clientRouter = require("./clients/client_router");
const clientAuthRouter = require("./clients/client_authRouter");
const authenticator = require("./middleware");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/clients", authenticator, clientRouter);
server.use("/api/auth", clientAuthRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "It's working!" });
});

module.exports = server;
