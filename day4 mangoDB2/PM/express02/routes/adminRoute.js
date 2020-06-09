var express = require('express')
var router = express.Router()
var artModel = require('../models/artModel')
var multer  = require('multer')
var upload = multer({dest:'public/img'})
// router.get()
router.post('/upload',upload.single('myImg'),(req,res)=>{
    console.log(req.file)
    res.set({
        'Access-Control-Allow-Origin':'*'
    })
    res.send({
        code:1,
        msg:'上传成功',
        data: req.file.path
    })
})


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
    artModel.count().then((allNum)=>{
        console.log(allNum)
        let page = Math.ceil(allNum/5);
        console.log(page)
        let pageArr=[];
        for(let i=0;i<page;i++){
            pageArr.push(i+1)
        }
        artModel.find().limit(5).then((result)=>{
            // console.log(result)
            res.render('admin/list.html',{
                listD:result,
                pageArr
            })
        })

    })
})
router.get('/list/page',(req,res)=>{
    let skipNum = (req.query.p-1)*5; //根据页码计算跳过的数据条数
    artModel.find().skip(skipNum).limit(5).then((result) => {
        res.send({
            code:1,
            msg:'加载成功',
            data:result
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
            data:result
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
