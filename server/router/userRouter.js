const express = require('express')
const userController = require('../controller/userController')
const user = express.Router()

user.get('/user', userController.getUser)
user.get('/users', userController.getAllUser)
user.post('/login', userController.loginIn)
user.post('/sign', userController.createUser)
user.post('/user', userController.createUser)

user.patch('/user', userController.updatePassword)

user.delete('/user', userController.deleteUser)

module.exports = user
