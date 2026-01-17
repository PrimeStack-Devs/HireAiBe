const path = require("path");

module.exports = ({ env }) => {
  return {
          connection: {
        client: "sqlite",
        connection: {
          filename: path.join(__dirname, "..", env("DATABASE_FILENAME", ".tmp/data.db")),
        },
        useNullAsDefault: true,
      },
    // connection: {
    //   client: "postgres",
    //   connection: {
    //     host: env("PGHOST", "127.0.0.1"),
    //     port: env.int("PGPORT", 24569),
    //     database: env("PGDATABASE", "strapi"),
    //     user: env("PGUSER", "strapi"),
    //     password: env("PGPASSWORD", "password"),
    //     // ssl: true,
    //   },
    // },
  };
};
