var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var todoSchema = new Schema({
    username:String,
    todo:String,
    isDone: Boolean,
    priority:Number
});

var Todo = mongoose.model('Todos',todoSchema);
module.exports = Todo;