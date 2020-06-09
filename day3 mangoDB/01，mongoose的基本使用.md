# 一、mongoose的认识及使用
> mongoose 是一个js方法包，内部封装了许多用以操作MongoDB数据库的方法。

1. 安装mongoose
```
npm i mongoose -S
```

2. 引入mongoose，并使用其提供的方法连接MongoDB数据库
```
mongoose.connect('mongodb://localhost:27017/1906Blog',(err)=>{
    if(err){
        console.log('连接失败')
    }else{
        console.log('连接成功')
        app.listen(3001)  //指定服务监听端口
    }
})
```

# 二、mongoose存储数据流程
> schema   新建数据表结构      快递店仓库
> model    用以操作数据表的模型对象      找快递的人员

1. 新建一个用以存放【数据模型】的文件夹

2. 在该文件夹下按需新建项目开发所需要的【数据模型】js文件

3. 在该js文件中，通过mongoose提供的方法，创建【数据模型对象Model】

4. 新建【数据模型对象Model】的基本代码
```
var mongoose = require('mongoose')
var Schema = mongoose.Schema; //获取mongoose中那个可以创建表结构的构造函数
var studentSchema = new Schema({ //使用该构造函数实例化一个具体的表，并按需设定字段
    'name':String,
    'score':String
})
var studentModel = mongoose.model('studentModel', studentSchema) //创建一个【数据模型】，用来操作对应的那个表
module.exports = studentModel

```

5. 使用【数据模型对象】实例化一条具体数据，并存储
```
var studModel = require('../models/studentModel')
new studModel({
    'name':'张三丰',
    'score':'100'
}).save().then((result)=>{
    console.log(result)
})
```

# 四、zepto.js 
> 体积比较小的jQuery
> [zepto文档](https://zeptojs.bootcss.com/#)

# 五、任务
1. 熟悉mongoose连接数据库的流程

2. 熟悉mongoose建立数据模型的过程及数据存储流程

3. 完善发布页，实现博客的基本录入功能





