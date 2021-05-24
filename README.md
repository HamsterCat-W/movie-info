# movie-info

vue+element+express 全栈开发

<!-- express 的一些中间件 -->

npm install body-parser express morgan

<!-- 初始化eslint-->

npx eslint --init
√ How would you like to use ESLint? · style  
√ What type of modules does your project use? · none
√ Which framework does your project use? · none
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · node
√ How would you like to define a style for your project? · guide
√ Which style guide do you want to follow? · standard  
√ What format do you want your config file to be in? · JavaScript
Checking peerDependencies of eslint-config-standard@latest

<!-- nodemon是一种工具，可以自动检测到目录中的文件更改时通过重新启动应用程序来调试基于node.js的应用程序 -->

npm i -D nodemon eslint

npx eslint --init


<!-- 加密库 -->
npm install crypto --save


<!--  -->
app.get('/api/:id/:name', (req, res) => {
  // 取出id name
  console.log(req.params)
  res.send({
    message: 'Hello World',
    id: req.params.id
  })
})

app.get('/api', (req, res) => {
  // 取出？后面的键值对
  console.log(req.query)
  res.send({
    message: req.query
  })
})

app.post('/user', (req, res) => {
  console.log(req.body)
  res.send({
    code: 200,
    data: req.body
  })
})


<!--  -->
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json

<!--  -->
// 引入mongoose第三方模块 用来操作数据库
const mongoose = require('mongoose')
// 数据库连接
mongoose.connect('mongodb://localhost/movie', { useNewUrlParser: true })
  .then(() => console.log('数据库连接成功'))
  .catch(err => console.log(err, '数据库连接失败'))

// 创建集合规则
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  isPublished: Boolean
})

// 使用规则创建集合
// 1.集合名称
// 2.集合规则
const Course = mongoose.model('Course', courseSchema) // courses

// 插入操作
Course.create({ name: 'Javascript123', author: 'wuyuxin', isPublished: false })
  .then(result => {
    console.log(result)
  })

// 查找
Course.find().then((result) => { console.log(result) })
//  根据条件查找文档
Course.findOne({ name: 'node.js基础' }).then(result => console.log(result))

// 删除单个
Course.findOneAndDelete({}).then(result => console.log(result))
// 删除多个 {}删除所有
// User.deleteMany({}).then(result => console.log(result))

// 更新单个
// User.updateOne({ 查询条件 }, { 要修改的值 }).then(result => console.log(result))
// 更新多个
// User.updateMany({ 查询条件 }, { 要更改的值 }).then(result => console.log(result))

