const mongoose = require('mongoose')

const needSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  imgSrc: {
    type: String,
    required: true
  },
  publicDate: {
    type: String,
    required: true
  }
})

const Demand = mongoose.model('need', needSchema)

module.exports = Demand
