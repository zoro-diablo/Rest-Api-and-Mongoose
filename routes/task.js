const express = require('express')
const router = express.Router()


const {
  createTask,
  fetchAllTask,
  getSingleTask,
  updateTask,
  deleteTask,
} = require('../controller/task')

router.post('/task', createTask)
router.get('/task', fetchAllTask)
router.get('/task/:id', getSingleTask)
router.patch('/task/:id', updateTask)
router.delete('/task/:id', deleteTask)

module.exports = router
