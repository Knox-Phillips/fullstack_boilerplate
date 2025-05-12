/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
require("dotenv").config();

console.log("Loaded DATABASE_URL:", process.env.DATABASE_URL);

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: "/migrations",
    },
  },
};
