// Update with your config settings.
require('dotenv').load();

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DATABASE_NAME,
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }
};
