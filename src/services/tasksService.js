// HERE HANDLE ALL LOGIC AND CONNECTION WITH REPOSITORY

const taskRepository = require('../repositories/tasksRepository')

const getAllTasks = () => {
  return taskRepository.getAllTasks()
}

const createTask = () => {
  return taskRepository.createTask()
}

module.exports = { getAllTasks, createTask }
