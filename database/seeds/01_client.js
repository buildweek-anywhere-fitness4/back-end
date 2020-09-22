exports.seed = function (knex) {
  // Deletes ALL existing entries
  // Inserts seed entries
  return knex("client").insert([
    { id: 1, username: "JohnDoe", password: "abc123" },
    { id: 2, username: "JaneDoe", password: "abc123" },
    { id: 3, username: "JimmyDoe", password: "abc123" },
  ]);
};
