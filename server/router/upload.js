const express = require('express')
const multer = require('multer')
const uploadController = require('../controller/uploadController')
const fileUpload = express.Router()

const upload = multer({ dest: 'uploads_tmp' })
fileUpload.post('/upload', upload.any(), uploadController.uploading)

module.exports = fileUpload
