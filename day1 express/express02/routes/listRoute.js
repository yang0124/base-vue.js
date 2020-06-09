var express = require('express')
var listD = require('../data/listData')
// 对象    我看到外面有汽车
// 对象的实例化  我看到外面有一辆 玛莎拉蒂
var router = express.Router()
router.get('/', (req, res) => {  //为express服务，挂载接口
    console.log('列表接口')
    // res.send('列表接口')
    ///Users/yooye/Desktop/1906H5/01，Nodejs/express02/routes
    let dir = __dirname.split('routes')[0]
    res.sendFile(dir + '/views/index.html')
})
router.get('/data', (req, res) => {
    res.send({  //下发数据包
        code: 1,  //状态码
        msg: '加载成功', //状态提示文字
        data: listD
    })
})

module.exports = router