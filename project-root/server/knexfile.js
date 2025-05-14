/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
require("dotenv").config({
  path: require("path").resolve(__dirname, "../.env"),
});

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: "/migrations",
    },
  },
};
