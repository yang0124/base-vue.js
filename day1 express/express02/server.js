var express = require('express')  //引入express模块
var path = require('path')
var bodyParser = require('body-parser')

var app = express()  //提取express提供的方法对象

app.use('/public', express.static(path.join(__dirname, 'public')))
// 当用户以/public访问服务端的时候，将本次访问引导至绝对路径下的public文件夹去获取对应的静态资源

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/list',require('./routes/listRoute'))
app.use('/detail',require('./routes/detailRoute'))

app.post('/test/post',(req,res)=>{
    console.log(req.body)
})

app.listen(3001)  //指定服务监听端口