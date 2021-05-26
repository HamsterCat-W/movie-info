const Publicity = require('../models/publicityModel')

// create
const createPub = async (req, res) => {
  const { name, univalence } = req.body
  if (name === '' || name.trim() === '') {
    res.send({
      meta: {
        state: 500,
        msg: 'names can not be empty'
      }
    })
  }
  const rs = await Publicity.find({ name: name })
  if (rs.length > 0) {
    res.send({
      meta: {
        state: 500,
        msg: 'publicity already exist'
      }
    })
  }
  const data = await Publicity.create({ name: name, univalence: univalence })
  if (data) {
    console.log(`---------->${name}的计价公示创建成功`)
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
        msg: 'publicity create failed'
      }
    })
  }
}

// find
const getPub = async (req, res) => {
  const { name } = req.query
  const data = await Publicity.find({ name: name })
  //   console.log(data)
  if (data.length > 0) {
    console.log(`---------->${name}的 publicity查询成功`)
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

const getAllPub = async (req, res) => {
  const data = await Publicity.find()
  console.log('---------->所有的publicity查询成功')
  res.send({
    meta: {
      state: 200,
      msg: 'success'
    },
    data: data
  })
}

// update
const updatePub = async (req, res) => {
  const { name, univalence } = req.body
  if (name) {
    const data = await Publicity.updateOne({ name: name }, { univalence: univalence })
    // console.log(data)
    if (data.ok === 1) {
      console.log(`---------->${name}单价修改成功`)
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
  } else {
    res.send({
      meta: {
        state: 500,
        msg: 'name can not be empty'
      },
      data: 0
    })
  }
}
// delete
const deletePub = async (req, res) => {
  const { name } = req.body
  if (name) {
    const data = await Publicity.findOneAndDelete({ name: name })
    if (data) {
      console.log(`---------->删除了公示${name}`)
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
          msg: 'Error'
        },
        data: 0
      })
    }
  } else {
    res.send({
      meta: {
        state: 500,
        msg: 'name can not be empty'
      },
      data: 0
    })
  }
}

module.exports = {
  createPub,
  getPub,
  updatePub,
  deletePub,
  getAllPub
}
