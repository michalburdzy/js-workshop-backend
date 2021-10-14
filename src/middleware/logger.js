const logger = require('pino')();
module.exports = (req, res, next) => {
  const loggerMessage = `${req.method} ${req.originalUrl}`;
  logger.info(loggerMessage);

  next()
}
