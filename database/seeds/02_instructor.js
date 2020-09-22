exports.seed = function (knex) {
  // Deletes ALL existing entries
  // Inserts seed entries
  return knex("instructor").insert([
    { id: 1, username: "Trainer1", password: "abc123" },
    { id: 2, username: "Trainer2", password: "abc123" },
    { id: 3, username: "Trainer3", password: "abc123" },
  ]);
};
