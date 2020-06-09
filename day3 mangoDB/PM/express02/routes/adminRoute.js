var express = require('express')
var router = express.Router()
var listD = require('../data/listData')
var studModel = require('../models/studentModel')
var artModel = require('../models/artModel')

router.get('/',(req,res)=>{ //渲染发布页面
    res.render('admin/pub.html')
})

router.post('/pub',(req,res)=>{ //发布按钮功能接口
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

router.get('/list', (req, res) => { //文章列表渲染
    artModel.find().then((result)=>{
        // console.log(result)
        res.render('admin/list.html',{
            listD:result
        })
    })
})

router.get('/edit', (req, res) => { //文章编辑页面的渲染
    // console.log(req.query.id)
    let { id } = req.query //解构赋值
    artModel.findById(id).then((result)=>{
        console.log(result)
        res.render('admin/edit',result)
    })
})

router.post('/update',(req,res)=>{
    let {id} = req.body;
    let newObj={};
    for(let attr in req.body){
        if(attr!='id'){
            newObj[attr] = req.body[attr]
        }
    }
    artModel.update({_id:id},newObj,(result)=>{
        res.send({
            code:1,
            msg:'修改成功'
        })
    })
})

router.get('/search',(req,res)=>{ //模糊查询
    let reg = new RegExp(req.query.stext)
    artModel.find({author:reg}).then((result)=>{
        console.log(result)
        res.send({
            code:1,
            msg:'查询成功',
            data:result,
        })
    })
})

router.get('/del',(req,res)=>{
    let {id} = req.query;
    artModel.remove({_id:id}).then((result)=>{
        console.log(result)
        res.send({
            code:1,
            msg:'删除成功'
        })
    })
})


module.exports = router
