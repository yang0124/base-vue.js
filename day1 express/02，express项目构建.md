# 一、服务端下发数据的方法
1. res.send('字符串')
2. res.send(json)
3. res.sendFile(绝对路径)


# 二、服务端获取前端提交数据的方法
1. req.query    获取get请求提交的数据
2. req.body     获取post请求提交的数据

# 三、中间件(middleware)
> 可以嵌入Express框架的一些插件模块，可以协助我们完成Express本身无法完成的任务
> 以body-parser中间件的使用为例
1. 安装
```
npm i body-parser -S
```
2. 引入配置
```
var bodyParser = require('body-parser') 

var app = express()  //提取express提供的方法对象

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
```


# 四、路由
> 路由器 --- 将对应的用户请求， 准确的引导至对应的服务器去获取图片、网页等资源
Express中路由的作用
 + 将所有项目接口，分类提取到不同的js文件模块
 + 在用户访问某个接口的时候，通过路由的方式引导用户访问对应的js文件模块

> 代码是写给人看的，顺便给机器执行

1. 将同类接口提取为一个独立的js模块

2. 在该js模块中通过路由的方式对外暴露接口
```
var express = require('express')
var router = express.Router()  //定义路由对象
router.get('/a',()=>{})   //在路由对象下挂载接口
router.post('/b',()=>{})
module.exports = router    //对外暴露路由接口

```

3. 在server.js中，引导用户访问对应接口js模块
```
app.use('/list',require('./routes/listRoute'))
app.use('/路由模块的基础路径',引导至哪个js接口模块？)
```

# 任务
1. 熟悉Express基本使用流程。

2. 静态资源托管的使用流程。

3. 中间件的含义及body-parser的使用。

4. 路由是什么？ 为什么要使用路由？ 怎么使用路由？


# 模拟面试
1. 自我介绍(口语化一点)
2. 工作经历  
3. 掌握的技术栈  
4. 印象比较深刻项目、项目中遇到的问题





