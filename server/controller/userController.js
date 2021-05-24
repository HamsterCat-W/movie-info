const User = require('../models/userModel')
const Crypto = require('../crypto')

// 创建用户
const createUser = async (req, res) => {
  const email = req.body.email
  const password = Crypto.encrypt(req.body.password)
  // console.log(password)
  // console.log(Crypto.decrypt(password))
  const data = await User.create({ email: email, password: password })

  if (data) {
    console.log('---------->创建了一个新用户')
    console.log(data)
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

// 根据邮箱查询用户
const getUser = async (req, res) => {
  // console.log(req.query)
  const data = await User.find({ email: { $in: [req.query.email] } })

  console.log(data)
  if (data.length > 0) {
    console.log('---------->查询成功')
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
        msg: 'email is not found'
      }
    })
  }
}

// 查询所有用户
const getAllUser = async (req, res) => {
  const data = await User.find()
  console.log('---------->查询成功')
  res.send({
    meta: {
      state: 200,
      msg: 'success'
    },
    data: data
  })
}

// 修改密码
const updatePassword = async (req, res) => {
  const email = req.body.email
  const password = Crypto.encrypt(req.body.password)
  const data = await User.updateOne({ email: email }, { password: password })
  console.log(data)
  if (data.ok === 1) {
    console.log('---------->密码修改成功')
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
        msg: 'Error'
      },
      data: 0
    })
  }
}

// 删除用户
const deleteUser = async (req, res) => {
  const data = await User.findOneAndDelete({ email: req.body.email })
  console.log(data)
  if (data) {
    console.log('---------->删除了一个用户')
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
}

// 登录
const loginIn = async (req, res) => {
  const email = req.body.email
  const password = Crypto.encrypt(req.body.password)
  const data = await User.find({ email: email }, { password: password })
  console.log(data)
  if (data.length > 0) {
    res.send({
      meta: {
        state: 200,
        msg: 'success'
      }
    })
  } else {
    res.send({
      meta: {
        state: 500,
        msg: 'Error'
      }
    })
  }
}

module.exports = {
  createUser,
  getUser,
  loginIn,
  getAllUser,
  updatePassword,
  deleteUser
}
