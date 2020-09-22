exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("instructor")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("instructor").insert([
        { username: "Trainer1", password: "abc123" },
        { username: "Trainer2", password: "abc123" },
        { username: "Trainer3", password: "abc123" },
      ]);
    });
};
