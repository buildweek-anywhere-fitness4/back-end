// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./database/users.db3",
    },

    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./database/test.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
      migrations: {
        tableName: "knex_migrations",
      },
    },

    production: {
      client: "pg",
      connection: {
        database: process.env.DATABASE_URL,
        useNullAsDefault: true,
        migrations: {
          directory: "./database/migrations",
        },
        seeds: {
          directory: "./database/seeds",
        },
      },
    },
  },
};
