const knex = require("../db/connection");


//create() creates a query that inserts a new supplier into the suppliers table while returning all columns from the newly inserted row.
//insert can return an array of records; chaining .then() arrow function returns only one record 
function create(supplier) {
    return knex("suppliers")
      .insert(supplier)
      .returning("*")
      .then((createdRecords) => createdRecords[0]);
  }
  
  function read(supplier_id) {
    return knex("suppliers").select("*").where({ supplier_id }).first();
  }
  
  function update(updatedSupplier) {
    return knex("suppliers")
      .select("*")
      .where({ supplier_id: updatedSupplier.supplier_id })
      .update(updatedSupplier, "*")
      .then((updatedRecords) => updatedRecords[0]);
  }
  
  function destroy(supplier_id) {
    return knex("suppliers").where({ supplier_id }).del();
  }
  
  module.exports = {
    create,
    read,
    update,
    delete: destroy,
  };