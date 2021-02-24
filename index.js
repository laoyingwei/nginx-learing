const express = require('express')
const path = require('path')
let server = express()
let userRouter = express.Router()
server.use(express.static(path.join(__dirname,'edu')))
server.listen(3001, () => {
    console.log('启动成功')
})

server.use('/user')

userRouter.get('/', (req,res) => {
    res.send('用户')
})


userRouter.get('/:id', (req,res) => {
    res.send('动态路由')
})
