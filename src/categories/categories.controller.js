const categoriesService = require("./categories.service");

// function list(req, res, next) {
//   categoriesService
//     .list()
//     .then((data) => res.json({ data }))
//     .catch(next);
// }

//update list to async function with try/catch for error handling
async function list(req, res) {
  try {
  const data = await categoriesService.list();
  res.json({ data });
 }catch(error) {
  next(error);
 }
}


module.exports = {
  list,
};