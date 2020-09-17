const express = require("express");
const Clients = require("./client_model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const client = await Clients.find();
    res.json(client);
    console.log("token", req.decodedToken);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
