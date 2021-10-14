const express = require('express')
const req = require('express/lib/request')
const tasksController = require('./controllers/tasksController')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('API DOCUMENTATION WILL BE IMPLEMENTED HERE')
})

router
  .route('/tasks')
  .get(tasksController.getAllTasks)
  .post(tasksController.createTask)

router.get('/error', (req, res) => {
  throw new Error('error message')
})
module.exports = router
