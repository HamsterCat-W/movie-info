const Demand = require('../models/needModel')

function formatDate (date) {
  const d = new Date(date)
  let month = '' + (d.getMonth() + 1)
  let day = '' + d.getDate()
  const year = d.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return [year, month, day].join('-')
}

// create
const createDem = async (req, res) => {
  const { title, content, imgSrc } = req.body
  const date = formatDate(new Date())
  const data = await Demand.create({ title: title, content: content, imgSrc: imgSrc, publicDate: date })
  console.log(data)
  if (data) {
    console.log('---------->需求创建成功')
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
        msg: 'demand create failed'
      }
    })
  }
}

// find
const getDem = async (req, res) => {
  const { publicDate, title } = req.query
  const data = await Demand.find({ publicDate: publicDate, title: title })
  //   console.log(data)
  if (data.length > 0) {
    console.log(`---------->发布时间为${publicDate}的需求查询成功`)
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
        msg: 'find failed'
      }
    })
  }
}

const getAllDem = async (req, res) => {
  const data = await Demand.find()
  console.log('---------->所有的Demand查询成功')
  res.send({
    meta: {
      state: 200,
      msg: 'success'
    },
    data: data
  })
}

// update
const updateDem = async (req, res) => {
  const { publicDate, imgSrc, content, title } = req.body
  if (publicDate === '') {
    res.send({
      meta: {
        state: 500,
        msg: 'publicDate can not be empty'
      },
      data: 0
    })
  }
  const data = await Demand.updateOne({ publicDate: publicDate, title: title }, { imgSrc: imgSrc, content: content })
  if (data.ok === 1) {
    console.log('---------->需求修改成功')
    res.send({
      meta: {
        state: 200,
        msg: 'success'
      },
      data: data.ok
    })
  } else {
    res.send({
      meta: {
        state: 500,
        msg: 'update is fail'
      },
      data: 0
    })
  }
}

// delete
const deleteDem = async (req, res) => {
  const { title, publicDate } = req.body
  if (title === '' || publicDate === '') {
    res.send({
      meta: {
        state: 500,
        msg: 'title and publicDate can not be empty'
      },
      data: 0
    })
  }

  const data = await Demand.findOneAndDelete({ title: title, publicDate: publicDate })
  if (data) {
    console.log(`---------->删除了需求 标题：${title} 发布时间：${publicDate}`)
    res.send({
      meta: {
        state: 200,
        msg: 'success'
      },
      data: 1
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
  createDem,
  getDem,
  updateDem,
  deleteDem,
  getAllDem
}
