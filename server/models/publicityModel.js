const mongoose = require('mongoose')

const publicitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  univalence: {
    type: Number,
    required: true
  }
})

const Publicity = mongoose.model('publicity', publicitySchema)

module.exports = Publicity
