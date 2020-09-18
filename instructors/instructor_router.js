const express = require("express");
const Instructor = require("./instrusctors_model");
const restrict = require("../middleware");
const router = express.Router();

router.get("/", restrict(), async (req, res, next) => {
  try {
    res.json(await Instructor.find());
  } catch (err) {
    next(err);
  }
});

module.exports = router;
