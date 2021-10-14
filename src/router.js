const express = require('express')
const req = require('express/lib/request')
const tasksController = require('./controllers/tasksController')
const { badRequestError } = require('./utils/errors')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('API DOCUMENTATION WILL BE IMPLEMENTED HERE')
})

router
  .route('/tasks')
  .get(tasksController.getAllTasks)
  .post(tasksController.createTask)

router.get('/error', (req, res) => {
  throw badRequestError;
})
module.exports = router
