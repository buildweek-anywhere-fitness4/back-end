exports.up = async function (knex) {
  await knex.schema.createTable("client", (table) => {
    table.increments("id");
    table.string("username").notNull().unique();
    table.string("password").notNull();
  });

  await knex.schema.createTable("instructor", (table) => {
    table.increments("id");
    table.string("username").notNull().unique();
    table.string("password").notNull();
  });

  await knex.schema.createTable("class", (table) => {
    table.increments("id").notNull().unique();
    table
      .integer("instructor_id")
      .unsigned()
      .notNull()
      .references("id")
      .inTable("instructor")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.string("name").notNull();
    table.string("type").notNull();
    table.string("start_time").notNull();
    table.string("duration").notNull();
    table.string("intensity").notNull();
    table.string("location").notNull();
    table.integer("max_size").notNull();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("class");
  await knex.schema.dropTableIfExists("instructor");
  await knex.schema.dropTableIfExists("client");
};
