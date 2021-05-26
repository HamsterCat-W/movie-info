const express = require('express')
const commentController = require('../controller/commentController')
const comment = express.Router()

comment.get('/cmt', commentController.getCom)
comment.post('/cmt', commentController.createCom)
comment.patch('/cmt', commentController.updateCom)
comment.delete('/cmt', commentController.deleteCom)

module.exports = comment
