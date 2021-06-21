const User = require('../models/userModel')
const Crypto = require('../crypto')
const { secretKey, expiresIn } = require('../config')
const jwt = require('jsonwebtoken')

// 创建用户
const createUser = async (req, res) => {
  const { email } = req.body
  const password = Crypto.encrypt(req.body.password)
  // console.log(password)
  // console.log(Crypto.decrypt(password))

  if (email == null || email.trim() === '' || req.body.password == null || req.body.password.trim() === '') {
    res.send({
      meta: {
        state: 500,
        msg: '用户名密码不能为空'
      }
    })
  } else {
    const rs = await User.find({ email: email })
    // console.log(rs)
    if (rs.length > 0) {
      res.send({
        meta: {
          state: 400,
          msg: '该邮箱已注册过了'
        }
      })
    } else {
      const data = await User.create({ email: email, password: password })
      if (data) {
        console.log(`---------->创建了一个邮箱为${email}新用户`)
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
  }
}

// 根据邮箱查询用户
const getUser = async (req, res) => {
  const { email } = req.query
  // console.log(req.query)
  const data = await User.find({ email: email })

  // console.log(data)
  if (data.length > 0) {
    console.log(`---------->用户${email}查询成功`)
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
  console.log('---------->所有用户查询成功')
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
    console.log(`---------->邮箱为${email}密码修改成功`)
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

// 删除用户
const deleteUser = async (req, res) => {
  const { email } = req.body
  const data = await User.findOneAndDelete({ email: email })
  console.log(data)
  if (data) {
    console.log(`---------->删除了用户${email}`)
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
  // const password = Crypto.encrypt(req.body.password)
  if (email == null || email.trim() === '') {
    res.send({
      meta: {
        state: 500,
        msg: 'email and password can not be empty'
      }
    })
  } else {
    const data = await User.find({ email: email })
    if (data) {
      console.log('123')
      // console.log(data[0].password)
      const token = jwt.sign({ email }, secretKey, { expiresIn: expiresIn })
      const password = Crypto.decrypt(data[0].password)
      console.log(password)
      // console.log(data)
      if (password === req.body.password) {
        res.send({
          meta: {
            state: 200,
            code: 0,
            msg: 'success',
            token: token
          }
        })
      } else {
        res.send({
          meta: {
            state: 500,
            code: -1,
            msg: 'email or password is error'
          }
        })
      }
    } else {
      res.send({
        meta: {
          state: 500,
          msg: '用户名不存在'
        }
      })
    }
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
