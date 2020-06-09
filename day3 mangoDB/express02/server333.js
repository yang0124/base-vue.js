var express = require('express')  //引入express模块
var path = require('path')
var bodyParser = require('body-parser')

var app = express()  //提取express提供的方法对象
var listD = require('./data/listData')
app.use('/public', express.static(path.join(__dirname, 'public')))
// 当用户以/public访问服务端的时候，将本次访问引导至绝对路径下的public文件夹去获取对应的静态资源

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/list',(req,res)=>{  //为express服务，挂载接口
    console.log('列表接口')
    // res.send('列表接口')
    res.sendFile(__dirname+'/views/index.html')
})
app.get('/list/data', (req, res) => {
    res.send({  //下发数据包
        code:1,  //状态码
        msg:'加载成功', //状态提示文字
        data: listD
    })
})
app.get('/detail', (req, res) => {  //为express服务，挂载接口
    res.sendFile(__dirname + '/views/detail.html')
})
app.get('/detail/data',(req,res)=>{
    console.log(req.query)  //获取前端通过get请求提交的数据
    let idx = req.query.id;
    res.send({
        code:1,
        msg:'加载成功',
        data:listD[idx]
    })
})

app.post('/test/post',(req,res)=>{
    console.log(req.body)
})

app.listen(3001)  //指定服务监听端口