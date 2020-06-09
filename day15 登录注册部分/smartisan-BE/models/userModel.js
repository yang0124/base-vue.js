var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var userSchema = new Schema({
    username:String,
    pwd:String,
    phone:String,
    email:String,
    img:String,
})
var userModel = mongoose.model('userModel',userSchema)

module.exports = userModel;