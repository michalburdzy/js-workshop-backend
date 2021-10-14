const express = require('express')
const tasksController = require('./controllers/tasksController')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('API DOCUMENTATION WILL BE IMPLEMENTED HERE')
})

router
  .route('/tasks')
  .get(tasksController.getAllTasks)
  .post(tasksController.createTask)

module.exports = router
