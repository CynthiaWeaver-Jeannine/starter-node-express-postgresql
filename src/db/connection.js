//determine the current environment where the application code is running and stores the value in the env var
const env = process.env.NODE_ENV || "development";

//require the database config object from the knexfile.js for the current environment and stores it in the config variable
const config = require("../../knexfile")[env]

//initialize a knex instance
const knex = require("knex")(config);

//export the knex instance so that other files can require it
module.exports = knex;
