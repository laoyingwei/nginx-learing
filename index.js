const express = require('express')
const path = require('path')
let server = express()
server.use(express.static(path.join(__dirname,'public')))
server.listen(80, () => {
    console.log('启动成功')
})

