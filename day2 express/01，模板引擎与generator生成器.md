# 一、Express理论知识回顾
1. Express基本使用流程
```
var express = require('express')
var app = express()
app.get()
app.listen(3000)
```

2. 服务端为前端下发数据的方式
```
res.send()
res.sendFile
res.render()
```

3. 服务端接收前端提交数据方法
```
req.query
req.body     想到body-parser中间件
```

4. 中间件的认识与使用

5. 路由的使用流程

# 二、模板引擎
> 搜索引擎 
> 将HTML静态结构调整后，变成模板，我们可以向这个模板中填充不同的数据内容
模板引擎：
[Jade](http://www.nooong.com/docs/jade_chinese.htm)
[HandleBar](https://handlebarsjs.com/)
[Swig文档](http://node-swig.github.io/swig-templates/docs/#install)
[swig-templates](https://www.npmjs.com/package/swig-templates)

+ SSR（server side render）服务端渲染  ---- 采用模板引擎渲染
> 优点：对SEO（搜索引擎优化）比较友好
> 弊端：前后端分工不协调，开发周期较长

+ CSR (client side render) 客户端渲染  ---- 采用ajax请求数据并渲染
> 优点：前后端分工明确，开发周期比较短
> 弊端：不利于项目的SEO

swig模板引擎的使用流程
1. 安装
```
npm i swig-templates -s
```

2. 引入配置（server.js）
```
var swig = require('swig-templates')
app.engine('html',swig.renderFile)
app.set('view engine','html')
app.set('views',自己的存放html模板的路径)
```

3. 在某一个项目接口下使用，例如:'/admin'接口
```
router.get('/admin',(req,res)=>{
    res.render('swigtest.html',{
        list:listD
    })
})
```

4. 在html模板中使用swig提供的特殊语法，完成数据渲染
```
{% for item in list %}
    <div class="jumbotron">
        <h1>{{item.tit}}</h1>
        <p>{{item.intro}}</p>
    </div>
{% endfor %}
```

# 三、generator生成器
> 通过简单命令，快速生成Express基本的项目目录结构及开发环境
1. 安装generator生成器
```
npm install express-generator -g
```
2. 在需要生成项目的目录下，打开命令终端

3. 通过express命令生成目录结构
```
express --no-view <项目名称>
```

4. cd 进入新生成的项目目录，安装依赖并启动
```
npm i
node bin/www   //启动命令根据命令行所处的位置来定
```

5. 默认启动端口为3000，预览测试

# 四、熟悉generator生成的目录
--bin
----www   项目启动文件
--public  静态资源文件
--routes  路由模块存放
--app.js  项目基础逻辑文件（中间件配置、路由引入、静态资源托管等）

# 五、前端向后端发起请求的方式汇总
> 按照项目的实际需求，选择合适的请求方式
1. get请求
> 浏览器地址栏
> a标签跳转
> ajax请求
> form 表单


2. post请求
> ajax请求
> form表单

# 六、任务
1. 熟悉swig模板引擎的基本使用流程

2. 了解其他模板引擎的使用

3. 学会使用generator生成器构建项目开发环境

4. SSR与CSR的概念






