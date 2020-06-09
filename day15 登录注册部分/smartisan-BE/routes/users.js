var express = require('express')
var router = express.Router()
var userModel = require('../models/userModel')
var multer  = require('multer') //上传图片的中间件
var bcrypt = require('bcryptjs')  //密码加密的中间件
var jwt = require('jsonwebtoken') //token签发与验证的中间件
 
// var upload = multer({dest:'public/img'})
var store = multer.diskStorage({
    destination: function (req, file, cb) { //配置存放路径
        cb(null, 'assets/img')
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


router.post('/reg', (req, res) => { //注册验证接口
    console.log(req.body)
    let {username,pwd,email,phone} = req.body;
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
                    pwd:hashPwd,
                    email,
                    phone
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

let secret = 'asjdflasjflkasjfdla';
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
            //登录成功后，服务端签发token
            jwt.sign({
                time:new Date().getTime(),
                end:1000*30
            },secret,(err,token)=>{
                console.log(token)
                //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbmQiOjMwMDAwMCwiaWF0IjoxNTc1NjE2NDk0fQ.fc7JJSXWlXjHiWejD3YwxshMJkaRqz9bkDJDHuzgbdk
                if(!err){
                    res.send({
                        code: 1,
                        msg: '登录成功',
                        data:{
                            token,
                            user,
                        }
                    })
                }
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
    let { token } = req.query;
    jwt.verify(token,secret,(err,result)=>{
       if(result){
           console.log(result)
           let {time,end} = result;
           let nowTime = new Date().getTime();
           console.log(nowTime,time)
           if(nowTime-time>end){
               res.send({
                   code: 0,
                   msg: 'token已过期'
               })
           }else{
               res.send({
                   code: 1,
                   msg: '可以访问vip页面'
               })
           }
           
       }else{
           console.log('token验证失败')
       }
    })
})


module.exports = router
