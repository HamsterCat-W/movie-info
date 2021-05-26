const Comment = require('../models/commentModel')

// create
const createCom = async (req, res) => {
  const { content, author, targetDem } = req.body
  const data = await Comment.create({
    content: content,
    author: author,
    targetDem: targetDem
  })
  if (data) {
    console.log('---------->创建了一条新的评论')
    // console.log(data)
    res.send({
      meta: {
        state: 200,
        msg: 'success'
      },
      data: data
    })
  } else {
    res.send({
      meta: {
        state: 500,
        msg: 'failed'
      }
    })
  }
}
// find
const getCom = async (req, res) => {
  const { author, targetDem } = req.query
  if (author === '' || targetDem === '') {
    res.send({
      meta: {
        state: 500,
        msg: 'author and targetDem can not be empty'
      }
    })
  }
  const data = await Comment.find({
    author: author,
    targetDem: targetDem
  })
    .populate(['author', 'targetDem'])
    .sort({ addTime: -1 })
  //   console.log(data)
  if (data.length < 0) {
    res.send({
      meta: {
        state: 500,
        msg: 'comments is not found'
      }
    })
  } else {
    res.send({
      meta: {
        state: 200,
        msg: 'success'
      },
      data: data
    })
  }
}
// update
const updateCom = async (req, res) => {
  res.send('ok')
}
// delete
const deleteCom = async (req, res) => {
  const { author, targetDem } = req.body
  if (author === '' || targetDem === '') {
    res.send({
      meta: {
        state: 500,
        msg: 'author and targetDem can not be empty'
      }
    })
  }
  const data = await Comment.findOneAndDelete({
    author: author,
    targetDem: targetDem
  })
  console.log(data)
  if (data) {
    console.log(`---------->删除了用户${author}的一条评论`)
    res.send({
      meta: {
        state: 200,
        msg: 'success'
      },
      data: data,
      result: 1
    })
  } else {
    res.send({
      meta: {
        state: 500,
        msg: 'delete failed'
      },
      data: 0
    })
  }
}

module.exports = {
  createCom,
  getCom,
  updateCom,
  deleteCom
}
