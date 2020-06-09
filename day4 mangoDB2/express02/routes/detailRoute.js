var express = require('express')
var listD = require('../data/listData')
var router = express.Router()

router.get('/', (req, res) => {  //为express服务，挂载接口
    let dir = __dirname.split('routes')[0]
    res.sendFile(dir + '/views/detail.html')
})
router.get('/data', (req, res) => {
    console.log(req.query)  //获取前端通过get请求提交的数据
    let idx = req.query.id;
    res.send({
        code: 1,
        msg: '加载成功',
        data: listD[idx]
    })
})
module.exports = router