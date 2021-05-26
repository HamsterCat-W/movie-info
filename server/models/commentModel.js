const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  content: {
    type: String
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  needInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Demand'
  }
})

const Comment = mongoose.model('comment', commentSchema)

module.exports = Comment
