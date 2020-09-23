const express = require("express");
const Classes = require("./class_model");
const restrict = require("../middleware");
const db = require("../database/dbconfig");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.json(await Classes.getAll());
  } catch (err) {
    next(err);
  }
});

router.post("/:id", restrict(), (req, res) => {
  let newClass = req.body;
  newClass.instructor_id = req.params.id;
  Classes.addClass(newClass)
    .then((item) => {
      res.status(201).json(item);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error posting class" });
      console.log(err);
    });
});

router.get("/:id", restrict(), (req, res) => {
  const id = req.params.id;
  Classes.getById(id)
    .then((classes) => {
      res.status(200).json(classes);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Error retrieving class." });
    });
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  try {
    console.log("changes", changes);
    const count = await db("class").where({ id }).update(changes);
    const updatedClass = await db("class").where({ id }).first();
    console.log(updatedClass);
    if (count) {
      res.status(200).json({ updatedClass });
    } else {
      res.status(404).json({ message: "Error updating the project" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error updating the project" });
  }

  // Classes.update(changes, id)
  //   .then((updated) => {
  //     console.log("updated", updated);
  //     res.status(200).json(updated);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.status(500).json({
  //       message: "Error updating the project",
  //     });
  //   });
});

router.delete("/:id", restrict(), async (req, res, next) => {
  try {
    const { id } = req.params;
    await db("class").where({ id }).del();

    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
