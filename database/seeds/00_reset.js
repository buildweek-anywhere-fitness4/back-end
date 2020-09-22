exports.seed = async function (knex) {
  // Deletes ALL existing entries
  const production = process.env.NODE_ENV === "production";
  if (production) {
    await knex.raw("TRUNCATE TABLE class CASCADE");
    await knex.raw("TRUNCATE TABLE instructor CASCADE");
    await knex.raw("TRUNCATE TABLE client CASCADE");
  } else {
    await knex("class").truncate();
    await knex("instructor").truncate();
    await knex("client").truncate();
  }
};
