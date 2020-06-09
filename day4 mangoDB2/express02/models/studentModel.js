var mongoose = require('mongoose')
var Schema = mongoose.Schema; //获取mongoose中那个可以创建表结构的构造函数
var studentSchema = new Schema({ //使用该构造函数实例化一个具体的表，并按需设定字段
    'name':String,
    'score':String
})

var studentModel = mongoose.model('studentModel', studentSchema) //创建一个【数据模型】，用来操作对应的那个表

module.exports = studentModel
