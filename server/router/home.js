// home.js

const express = require('express')
const home = express.Router()
home.get('/home', (req, res) => {
  res.send('欢迎来到博客展示页面')
})

home.post('/home', (req, res) => {
  console.log(req.body)
  res.send(req.body)
})
module.exports = home
