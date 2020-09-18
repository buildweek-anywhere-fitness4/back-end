const express = require("express");
const Instructors = require("./instrusctors_model");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("token", req.decodedToken);

  Instructors.find()
    .then((instructors) => {
      res.json(instructors);
    })
    .catch((err) => res.send(err));
});

module.exports = router;
