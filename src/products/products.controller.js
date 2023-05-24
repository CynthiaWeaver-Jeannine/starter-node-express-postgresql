//requires the service.js object and assigns it to a const
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const productsService = require("./products.service");


//add validation middleware to check whether a product exists based on ID
//the asynchronous function executes a Knex query. Using await forces the execution of the code to pause on that line until that asynchronous operatoin is finished. Once finished, the if statement checks for product and either stores the product or returns message.
async function productExists(req, res, next) {
  const product = await productsService.read(req.params.productId)
      if (product) {
        res.locals.product = product;
        return next();
      }
      next({ status: 404, message: `Product cannot be found.` });
}

function read(req, res) {
  const { product: data } = res.locals;
  res.json({ data });
}


//
async function list(req, res) {
  const data = await productsService.list();
  res.json({ data });
}

async function listOutOfStockCount(req, res) {
  res.json({ data: await productsService.listOutOfStockCount() });
}

async function listPriceSummary(req, res) {
  res.json({ data: await productsService.listPriceSummary() });
}

async function listTotalWeightByProduct(req, res) {
  res.json({ data: await productsService.listTotalWeightByProduct() })
}

module.exports = {
  read: [asyncErrorBoundary(productExists), read],
  list: asyncErrorBoundary(list),
  listOutOfStockCount: asyncErrorBoundary(listOutOfStockCount),
  listPriceSummary: asyncErrorBoundary(listPriceSummary),
  listTotalWeightByProduct: asyncErrorBoundary(listTotalWeightByProduct),
};
