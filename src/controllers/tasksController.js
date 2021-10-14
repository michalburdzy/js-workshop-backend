// HERE HANDLE HTTP REQUESTS AND RESPONSES

const taskService = require('../services/tasksService')

const getAllTasks = (req, res) => {
  return tasksService.getAllTasks()
}

const createTask = (req, res) => {
  // @TODO: get the task payload from the request body, and pass to tasksService.createTask as an argument
  // e.g. const task = req.body.task
  // return tasksService.createTask(task)

  return tasksService.createTask()
}

module.exports = { getAllTasks, createTask }
