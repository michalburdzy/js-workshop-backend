module.exports = (req, res, next, error) => {
  console.log('IMPLEMENT ERROR MIDDLEWARE')

  // @TODO: log every error message

  // @TODO: parse error response to always return json response in format { code: 400, message: 'Bad Request' }

  next()
}
