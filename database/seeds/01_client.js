exports.seed = function (knex) {
  // Deletes ALL existing entries
  // Inserts seed entries
  return knex("client").insert([
    { username: "JohnDoe", password: "abc123" },
    { username: "JaneDoe", password: "abc123" },
    { username: "JimmyDoe", password: "abc123" },
  ]);
};
