const bcrypt = require("bcryptjs");
const db = require("../database/dbconfig");

module.exports = {
  getAll,
  userClasses,
  update,
  remove,
  findById,
  getById,
  addClass,
};

function userClasses(id) {
  return db("class")
    .join("instructor", "instructor.instructor_id", "instructor.id")
    .select(
      "class.id",
      "class.name",
      "class.type",
      "class.start_time",
      "class.duration",
      "class.intensity",
      "class.location",
      "class.register_attendees",
      "class.max_size",
      "class.instructor_id"
    )
    .where("class.instructor_id", id);
}

function getById(id) {
  return db("class").where({ id }).first();
}

function getAll() {
  return db("class").orderBy("instructor_id");
}

function update(changes, id) {
  return db("class")
    .where({ id })
    .update(changes)
    .then((id) => {
      return getById(id);
    });
}

function remove(id) {
  return db("class").where({ id }).del();
}

function findById(id) {
  return db("class").where({ id }).first();
}

function addClass(newClass) {
  return db("class")
    .insert(newClass)
    .then((ids) => {
      return findById(ids[0]);
    });
}
