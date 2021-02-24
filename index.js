const express = require('express')
const path = require('path')
let server = express()
server.use(express.static(path.join(__dirname,'edu')))
server.listen(3001, () => {
    console.log('启动成功')
})


