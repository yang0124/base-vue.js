var express = require('express')
var router = express.Router()
var listD = require('../data/listData')
var studModel = require('../models/studentModel')
var artModel = require('../models/artModel')

router.get('/',(req,res)=>{
    res.render('admin/pub.html')
})

router.post('/pub',(req,res)=>{
    console.log(req.body)
    new artModel(req.body).save().then((result)=>{
        if(result){
            res.send({
               code:1,
               msg:'发布成功' 
            })
        }
    })
})

router.get('/a',(req,res)=>{
    res.render('admin/a.html')
})
router.get('/b', (req, res) => {
    res.render('admin/b.html')
})
router.get('/c', (req, res) => {
    res.render('admin/c.html')
})

// 测试mongoose新增数据的方法
// new studModel({
//     'name':'张三丰',
//     'score':'100'
// }).save().then((result)=>{
//     console.log(result)
// })

module.exports = router
