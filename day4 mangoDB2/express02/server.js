var express = require('express')  //引入express模块
var path = require('path')
var bodyParser = require('body-parser')
var swig = require('swig-templates')
var mongoose = require('mongoose')
var cors = require('cors')

var app = express()  //提取express提供的方法对象
app.use(cors())

app.use('/public', express.static(path.join(__dirname, 'public')))
// 当用户以/public访问服务端的时候，将本次访问引导至绝对路径下的public文件夹去获取对应的静态资源

app.engine('html', swig.renderFile); //告诉express我要使用什么样的方法渲染什么类型的模板
app.set('view engine', 'html'); //开启引擎
app.set('views', __dirname + '/views'); //设置引擎提取html模板文件的路径
swig.setDefaults({ cache: false });  //开发阶段关闭swig引擎的缓存机制


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use('/list',require('./routes/listRoute'))
app.use('/detail',require('./routes/detailRoute'))
app.use('/admin',require('./routes/adminRoute'))

app.post('/test/post',(req,res)=>{
    console.log(req.body)
})


mongoose.connect('mongodb://localhost:27017/1906Blog',(err)=>{
    if(err){
        console.log('连接失败')
    }else{
        console.log('连接成功')
        app.listen(3001)  //指定服务监听端口
    }
})