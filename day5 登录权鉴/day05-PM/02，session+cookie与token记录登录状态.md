# 一、后端记录用户登录状态

## (1). session+cookie【相对旧的一个方案】
> cookie会随用户请求连接，自动发往服务器
> 【注意】cookie有跨域的问题，跨域访问无法主动携带cookie给服务端

1. 安装两个模块
```
npm i cookie-parser express-session
```

2. 在server.js中引入配置
```
var session = require('express-session')
var cookieParser = require('cookie-parser')
var app = express()  //提取express提供的方法对象
app.use(cookieParser())
app.use(session({
    secret: 'jlkjlja',
    resave: false,
    saveUninitialized: true
}))
```

3. 在用户登录成功的时候，下发session+cookie信息
```
req.session.abc = true;  //为前端的请求链接下发信息
```

4. 用户访问有权限限制的接口时，判断登录状态
```
router.get('/vip',(req,res)=>{ //访问其他敏感接口的时候判断cookie
    console.log(req.session)
    let { loginState} = req.session;
    if(loginState){
        res.render('admin/vip')
    }else{
        res.send('您尚未登录')
    }
})
```

5. 退出登录
> 服务端清除前端浏览器session+cookie的过程
```
router.get('/logout',(req,res)=>{
    req.session.destroy(()=>{
        res.send({
            code:1,
            msg:'退出成功'
        })
    })
})
```

## (2). token
> jwt (json web token) 
> [jsonwebtoken文档](https://www.npmjs.com/package/jsonwebtoken)
> [jwt解析token](https://jwt.io/)

1. 按需引入jwt模块
```

```

2. 用户登录成功后，使用jwt加密生成一个字符串，下发给前端
> 我们将这个加密字符串就称为 token

3. 前端得到token后，将其存储localStorage

4. 当前端请求敏感接口时，携带token给服务器

5. 服务端验证该token是否合法
