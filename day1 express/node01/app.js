var http  = require('http')

var server = http.createServer()

server.on('listening',()=>{
    console.log('服务要开始监听了')
})

server.on('request',(req,res)=>{
    res.write('I am Nodejs!');
    res.end()
})

server.on('error',(err)=>{
    console.log(err)
})

server.listen(3000)