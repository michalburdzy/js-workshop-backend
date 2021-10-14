const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router')
const loggerMiddleware = require('./middleware/logger')
const errorMiddleware = require('./middleware/error')

const {
  app: { port }
} = require('./config')

const app = express()

app.use(bodyParser.json())

app.use(loggerMiddleware)

app.use(express.static('public'))

app.use('/api', router)

app.use(errorMiddleware)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
