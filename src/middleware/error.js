const { internalError } = require('../utils/errors')

module.exports = (error, req, res, next) => {
  console.log(internalError)
  return res.send(internalError)
}
