const createError = require('http-errors')

const internalError = new createError.InternalServerError()

const badRequestError = new createError.BadRequest()
module.exports = {
    internalError,
    badRequestError
}; 