const createError = require('http-errors')
const { internalError } = require('../utils/errors')

module.exports = (error, req, res, next) => {
  const isHttpError = createError.isHttpError(error)
  if (isHttpError) {
    return res.send(error)
  }

  return res.send(internalError)
}
