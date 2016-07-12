var Todos = require('../models/todoModel.js');
var bodyParser = require('body-parser');

module.exports = function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.get('/api/todos/:uname',function(req,res){
        var date = new Date();
        while(new Date()-date<1000){}
        Todos.find({username:req.params.uname},function(err,result){
            if(err) throw err;
            res.send(result);
        });
    });

    app.get('/api/todo/:id', function(req,res){
        Todos.findById({_id:req.params.id},function(err,result){
            if(err) throw err;
            res.send(result);
        });
    });

    app.post('/api/todo',function(req,res){
        if(req.body.id){
            Todos.findByIdAndUpdate(req.body.id,{
                todo:req.body.todo,
                isDone:req.body.isDone,
                priority:req.body.priority
            },function(err,todo){
                if(err) throw err;
                res.send('Success');
            });
        }else{
            var newTodo = Todo({
                username:'test',
                todo:req.body.todo,
                isDone:req.body.isDone,
                priority:req.body.priority
            });
            newTodo.save(function(err){
                if(err) throw err;
                res.send('Success');
            })
        }
    });

    app.delete('/api/todo',function(req,res){
        Todos.findByIdAndRemove(req.body.id,function(err){
            if(err) throw err;
            res.send('Success');
        })
    })
}