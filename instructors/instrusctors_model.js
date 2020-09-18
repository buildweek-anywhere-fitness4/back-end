const bcrypt = require("bcryptjs");
const db = require("../database/dbconfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db("instructor").select("id", "username", "password");
}

function findBy(filter) {
  return db("instructor").where(filter);
}

async function add(user) {
  user.password = await bcrypt.hash(user.password, 14);
  const [id] = await db("instructor").insert(user).returning(`id`);
  return findById(id);
}

function findById(id) {
  return db("instructor").where({ id }).first();
}
