// Update with your config settings.
require('dotenv').load();

var database_connection;

switch (process.env.NODE_ENV){
  case "production":
    database_connection = process.env.DATABASE_URL;
  break;
  default:
    database_connection = {
      database: process.env.DATABASE_NAME
    }
  break;
}

var configuration = {
  // development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_NAME
    }
  };

module.exports = require("knex")(configuration);
