const express = require('express')
const publicityController = require('../controller/publicityController')

const publicity = express.Router()

publicity.post('/pub/add', publicityController.createPub)
publicity.get('/pub/find', publicityController.getPub)
publicity.get('/pub/findAll', publicityController.getAllPub)
publicity.patch('/pub/update', publicityController.updatePub)
publicity.delete('/pub/del', publicityController.deletePub)

module.exports = publicity
