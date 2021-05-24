// 连接数据库
const mongoose = require('mongoose')
const { mongoUrl } = require('./config')

const connect = mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connection has been established'))
  .catch(err => console.log(err, 'Connection has not been established'))

module.exports = {
  connect
}
