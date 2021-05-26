const express = require('express')
const Demand = require('../controller/needController')
const multer = require('multer')
const demand = express.Router()

const upload = multer({ dest: 'uploads_tmp' })

demand.get('/dem', Demand.getDem)
demand.get('/demAll', Demand.getAllDem)
demand.post('/dem', upload.any(), Demand.createDem)
demand.patch('/dem', Demand.updateDem)
demand.delete('/dem', Demand.deleteDem)

module.exports = demand
