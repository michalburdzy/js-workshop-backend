module.exports = (req, res, next) => {
  console.log('IMPLEMENT LOGGER MIDDLEWARE')

  // @TODO: log every request in a format: method - route, e.g. "GET /tasks"

  // @TODO: find a logger package in npm repository and implement it here

  next()
}
