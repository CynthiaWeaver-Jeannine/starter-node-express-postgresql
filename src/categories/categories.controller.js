//requires the service object and asigns it to const
const categoriesService = require("./categories.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res) {
  const data = await categoriesService.list();
  res.json({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
};


//categoriesService.list() executes a Knex query. Using await forces execution to pause on that line until that asynchronous operation is finished. Once resolved, the response is stored in data. 
async function list(req, res) {
  const data = await categoriesService.list();
  res.json({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
};
