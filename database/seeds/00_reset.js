exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("class").truncate();
  await knex("instructor").truncate();
  await knex("client").truncate();
};
