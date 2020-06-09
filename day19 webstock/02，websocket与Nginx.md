# 一、websocket
> 思考功能：服务端向客户端下发通知信息  
> 1. ajax长轮询,定时器定期向服务器请求并获取数据
> 2. websocket 服务端与客户端长连接


1. 服务端
> [ws模块](https://www.npmjs.com/package/ws)
    + 安装ws模块并引入
    ```
    var WebSocket = require('ws')
    ```
    + 服务端创建websocket实例对象
    ```

    var wss = new WebSocket.Server({
        port:8081
    })
    ```
    + 使用socket实例对象，监听客户端的连接请求等事件
    ```
    wss.on('connection',(client)=>{   //监听连接请求
        console.log('服务端收到了客户端的连接请求')
        client.on('message',(msg)=>{  //监听客户端消息
            console.log(msg)
        })

        client.send('欢迎来聊天')  //向客户端发送消息

    })
    ```


2. 客户端
> [WebSocket对象](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)

    + 客户端发起连接请求,并做相应的事件监听
    ```
    var socket = new WebSocket('ws://localhost:8081')
    socket.addEventListener('message',function(msg){
        console.log(msg)
    })
    document.querySelector('button').onclick=function(){
        socket.send('我是一个客户端的消息')
    }
    ```

# 二. Nginx 服务器
> Apache
 + 了解Nginx服务器的优势
 + 知道如何安装Nginx服务器
 + 了解Nginx服务器的基本配置文件
 + 启动及访问Nginx服务器的方式

# 三. FTP工具
[winscp](https://winscp.net/eng/docs/lang:chs)
[FileZilla](https://filezilla-project.org/)

# 四、PM2 
> 进程守护工具
> [官网](https://pm2.keymetrics.io/)

1. 在CentOS服务器上安装PM2
```
npm i pm2 -g
```

2. 终端位置指定到node路径下，并使用pm2启动node服务
```
cd /node1906/bin

pm2 start 被启动文件名称
```

3. 其他pm2 命令
 + pm2 list   查看pm2维护的进程列表
 + pm2 stop 运行id    停止pm2维护的某个进程



