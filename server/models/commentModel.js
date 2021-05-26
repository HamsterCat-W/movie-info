const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  content: {
    type: String
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  targetDem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'need'
  }
})

const Comment = mongoose.model('comment', commentSchema)

module.exports = Comment
