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

  //this knex query selects the product_quantity_in_stock column, aliasing it as "out_of_stock"
  //it also selects a count all of the products where product_quantity_in_stock is set to 0. 
  //groupBy groups the result in the out_of_stock column
  function listOutOfStockCount() {
    return knex ("products")
      .select("product_quantity_in_stock as out_of_stock")
      .count("product_id")
      .where({product_quantity_in_stock: 0})
      .groupBy("out_of_stock");
  }

  //this query builder selects the supplier_id from the products table
  //and returns the min, max and avg prices grouped by the supplier_id column
  function listPriceSummary() {
    return knex("products")
      .select("supplier_id")
      .min("product_price")
      .max("product_price")
      .avg("product_price")
      .groupBy("supplier_id");
  }

  //this query builder selects the sku and title and a third column. 
  //the third column is the sum of multiplying product weight by product quantity
  //the result is grouped by sku and title of product
  function listTotalWeightByProduct() {
    return knex("products")
    .select(
      "product_sku",
      "product_title",
      knex.raw(
        "sum(product_weight_in_lbs * product_quantity_in_stock) as total_weight_in_lbs"
      )
    )
    .groupBy("product_title", "product_sku");
  }

  module.exports = {
    list,
    read,
    listOutOfStockCount,
    listPriceSummary,
    listTotalWeightByProduct,
  };

