const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Clients = require("./client_model");
const secret = require("../secret");

const router = express.Router();

router.post("/client_register", (req, res) => {
  let user = req.body;
  const rounds = process.env.HASH_ROUNDS || 14;
  const hash = bcrypt.hashSync(user.password, rounds);
  user.password = hash;

  Clients.add(user)
    .then((saved) => {
      res.status(201).json(saved);
    })
    .catch((error) => {
      res.status(500).json({ errorMessage: error.message });
    });
});

module.exports = router;
