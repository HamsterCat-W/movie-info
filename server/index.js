// 连接数据库
const mongoose = require('mongoose')

const connect = mongoose.connect('mongodb://localhost/movie', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('数据库连接成功'))
  .catch(err => console.log(err, '数据库连接失败'))

module.exports = {
  connect
}
