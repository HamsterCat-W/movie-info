const fs = require('fs')
const uploading = (req, res, next) => {
  // 上传文件的信息 req.files[0]
  // console.log(req.file)
  // console.log(req)
  const { originalname, path, size } = req.files[0]
  console.log(req.files[0])
  if (size === 0) {
    res.send({
      meta: {
        state: 500,
        msg: 'file can be empty'
      }
    })
  }
  const destFile = 'uploads/' + originalname
  // console.log(destFile)
  const filePos = `../${destFile}`
  // console.log(`../${destFile}`)
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err)
      res.send({
        meta: {
          state: 500,
          msg: 'upload fail'
        }
      })
    }
    // console.log(data)
    fs.writeFile(destFile, data, (err) => {
      if (err) {
        console.log(err)
        res.send({
          meta: {
            state: 500,
            msg: 'File upload fail'
          }
        })
      } else {
        res.send({
          meta: {
            state: 200,
            msg: 'File uploaded successfully',
            filename: originalname,
            position: filePos
          }
        })
      }
    })
  })
}

module.exports = {
  uploading
}
