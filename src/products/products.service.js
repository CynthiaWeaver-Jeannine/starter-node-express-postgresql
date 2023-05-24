//requires the knex instance that was initialezed in db/connection
const knex = require("../db/connection");


//list() builds a query that selects all the columns from the products table
function list() {
    return knex("products").select("*");
  }

//read() creates a query that selects all columns from the table where product_id column matches the argument passed to read()
//first() returns the first row in the table as an object

function read(productId) {
    return knex("products").select("*").where({ product_id: productId }).first();
  }

  module.exports = {
    list,
    read,
  };

