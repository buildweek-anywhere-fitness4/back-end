const db = require("../database/dbconfig");

module.exports = {
  add,
  find,
  fiondBy,
  findById,
};

function find() {
  return db("instructor").select("id", "username", "password");
}

function findBy() {
  return db("instructor").where(filter);
}

async function add(user) {
  const [id] = await db("instructor").insert(user, "id");

  return findById(id);
}

function findById(id) {
  return db("instructor").where({ id }).first();
}
