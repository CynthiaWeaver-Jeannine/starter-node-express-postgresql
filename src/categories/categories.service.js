//requires the knex instance initialized in connection.js
const knex = require("../db/connection");

//list() builds a query that selects all columns from categories table
function list() {
    return knex("categories").select("*");
  }
  
  module.exports = {
    list,
  };