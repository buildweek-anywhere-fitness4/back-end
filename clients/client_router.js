const express = require("express");
const Clients = require("./client_model");
const restrict = require("../middleware");
const router = express.Router();

router.get("/", restrict(), async (req, res, next) => {
  try {
    res.json(await Clients.find());
  } catch (err) {
    next(err);
  }
});

module.exports = router;
