const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Instructor = require("./instrusctors_model");
const secrets = require("../secret");

const router = express.Router();

router.post("/instructor_register", async (req, res, next) => {
  try {
    const { username } = req.body;
    const user = await Instructor.findBy({ username }).first();
    if (user) {
      return res.status(409).json({
        message: "Username unavailable",
      });
    }
    res.status(201).json(await Instructor.add(req.body));
  } catch (err) {
    next(err);
  }
});

router.post("/instructor_login", async (req, res, next) => {
  const authErr = {
    message: "Invalid Credentials",
  };
  try {
    const user = await Instructor.findBy({
      username: req.body.username,
    }).first();

    if (!user) {
      return res.status(401).json(authErr);
    }

    const passwordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordValid) {
      return res.status(401).json(authErr);
    }

    const tokenPayload = {
      userId: user.id,
    };

    res.cookie("token", jwt.sign(tokenPayload, process.env.JWT_SECRET));
    res.json({
      message: `Welcome ${user.username}`,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
