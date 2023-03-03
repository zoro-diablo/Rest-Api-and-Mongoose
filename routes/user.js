const express = require('express')
const router = express.Router()

const {
  createUser,
  login,
  fetchAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
} = require('../controller/user')

router.post('/user', createUser)
router.post('/login', login)
router.get('/user', fetchAllUser)
router.get('/user/:id', getSingleUser)
router.patch('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)

module.exports = router
