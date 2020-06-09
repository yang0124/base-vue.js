var express = require('express')
var router = express.Router()
var artModel = require('../models/artModel')
var userModel = require('../models/userModel')
var multer  = require('multer')
var bcrypt = require('bcryptjs') 

// var upload = multer({dest:'public/img'})
var store = multer.diskStorage({
    destination: function (req, file, cb) { //配置存放路径
        cb(null, 'public/img')
    },
    filename: function (req, file, cb) { //自定义文件名称
        console.log(file)
        let origname = file.originalname.split('.');
        let Len = origname.length;
        let ext = origname[Len-1];   //提取图片后缀
        let imgname = new Date().getTime()+parseInt(Math.random()*999) //生成一个绝对唯一的随机字符串，作为每个新图片的名称
        cb(null, imgname+'.'+ext)
    }
})

var upload = multer({ storage: store})

router.post('/upload',upload.single('myImg'),(req,res)=>{
    // console.log(req.file)
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


router.get('/reg/page',(req,res)=>{
    res.render('admin/reg')
})

router.post('/reg', (req, res) => { //注册验证接口
    console.log(req.body)
    let {username,pwd} = req.body;
    userModel.find({username}).then((result)=>{
        if(result.length>0){ //如果查到了同名用户，直接返回状态码给前端
            res.send({
                code:-666,
                msg:'用户已存在'
            })
            return false
        }
        
        bcrypt.hash(pwd,10,(err,hashPwd)=>{
            if(!err){
                console.log(hashPwd)
                new userModel({
                    username,
                    pwd:hashPwd
                }).save().then((regResult)=>{
                    res.send({
                        code:1,
                        msg:'注册成功'
                    })
                })
            }
        })
    })
})

router.post('/login',(req,res)=>{
   
    let {username,pwd} = req.body;
    userModel.find({username}).then((user)=>{ //验证用户是否注册过
        console.log(user)
        if(user.length==0){
            res.send({
                code:-667,
                msg:'请注册'
            })
            return false
        }
        let checkPwd = bcrypt.compareSync(pwd,user[0].pwd) //验证用户密码是否正确
        if(checkPwd){
            req.session.loginState = true //登录成功后设置cookie
            res.send({
                code:1,
                msg:'登录成功'
            })
        }else{
            res.send({
                code: 0,
                msg: '密码错误'
            })
        }
    })
})

router.get('/vip',(req,res)=>{ //访问其他敏感接口的时候判断cookie
    console.log(req.session)
    let { loginState} = req.session;
    if(loginState){
        res.render('admin/vip')
    }else{
        res.send('您尚未登录')
    }
})
router.get('/logout',(req,res)=>{
    req.session.destroy(()=>{
        res.send({
            code:1,
            msg:'退出成功'
        })
    })
})

module.exports = router
