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

router.post("/client_login", (req, res) => {
  let { username, password } = req.body;

  Clients.findBy({ username })
    .then(([user]) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ message: "Welcome!", token });
      } else {
        res.status(401).json({ message: "You shall not pass!" });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ errorMessage: error.message });
    });
});

function generateToken(user) {
  const payload = {
    userId: user.id,
    username: user.username,
  };
  const secret = secret.jwtSecret;

  const options = {
    expiresIn: "1d",
  };

  return jwt.sign(payload, secret, options);
}

module.exports = router;
