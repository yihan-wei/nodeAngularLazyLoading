var Todo = require('../models/todoModel');

module.exports = function(app){
    app.get('/api/setupTodos',function(req,res){
        var starterTodos = [{
            username:'Emma',
            todo:'Have Breakfast',
            isDone:true,
            priority:1
        },
        {
            username:'Emma',
            todo:'Go to office',
            isDone:true,
            priority:2
        },
        {
            username:'Emma',
            todo:'Send resume',
            isDone:true,
            priority:3
        },
        {
            username:'Emma',
            todo:'Setup interview',
            isDone:false,
            priority:4
        },
        {
            username:'Emma',
            todo:'Get offer',
            isDone:false,
            priority:5
        },
        {
            username:'Emma',
            todo:'Build project',
            isDone:false,
            priority:6
        },
        {
            username:'Emma',
            todo:'enjoy',
            isDone:false,
            hasAttachment:7
        }];
        Todo.create(starterTodos,function(err,results){
            res.send(results);
        });
    });
}