const db = require("../database/dbconfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db("client").select("id", "username", "password");
}

function findBy(filter) {
  return db("client").where(filter);
}

async function add(user) {
  const [id] = await db("client").insert(user, "id");

  return findById(id);
}

function findById(id) {
  return db("client").where({ id }).first();
}
