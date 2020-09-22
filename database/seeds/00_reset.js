exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("class").truncate();
  return knex("instructor").truncate();
  return knex("client").truncate();
};
