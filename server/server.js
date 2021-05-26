const express = require('express')
// 解析body
const bodyParser = require('body-parser')

const createError = require('http-errors')

// 使用express-jwt来进行token的解密和验证
const expressJWT = require('express-jwt')
// 日志信息
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const { secretKey } = require('./config')
const app = express()

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('combined'))
// 使用cookie
app.use(cookieParser())

// 拦截除白名单以外的所有请求
// 校验token，获取headers里的Authorization的token，要写在路由加载之前，静态资源之后
app.use(expressJWT({
  secret: secretKey,
  algorithms: ['HS256'],
  credentialsRequired: true
}).unless({
  // ⽩白名单,除了了这⾥里里写的地址，其他的URL都需要验证
  path: ['/login', '/sign']
}))

// 路由引入
const home = require('./router/home')
const userRouter = require('./router/userRouter')
const publicityRouter = require('./router/publicityRouter')
const fileUploadRouter = require('./router/upload')
const demandRouter = require('./router/needRouter')
const commentRouter = require('./router/commentRouter')
const Connection = require('./index')

// 路由使用
app.use(home)
app.use(userRouter)
app.use(publicityRouter)
app.use(fileUploadRouter)
app.use(demandRouter)
app.use(commentRouter)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // console.log(err)
  // console.log(req)
  if (err.name === 'UnauthorizedError') {
    // 这个需要根据⾃自⼰己的业务逻辑来处理理
    res.status(401).send({ code: -1, msg: 'token验证失败' })
  } else {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.send('error')
  }
})

// app.get('/', async (req, res) => {
//   res.send('hello world')
// })

const db = Connection.connect
console.log(db.toString())

app.listen(3000, () => console.log('server has been started on port 3000 '))
