var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var artSchema = new Schema({
    'title':String,
    'author':String,
    'intro':String,
    'time':String,
    'imgurl':String,
    'content':String
})
var artModel = mongoose.model('artModel',artSchema)

module.exports = artModel;