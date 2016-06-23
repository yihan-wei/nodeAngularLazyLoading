var express = require('express');
var app = express();
var config = require('./config');
var mongoose = require('mongoose');
var setupController = require('./controller/setupController');
var apiController = require('./controller/apiController');
var port = process.env.PORT || 3000;

app.use(express.static(__dirname+'/public'));
app.use('/bower_components',express.static(__dirname+'/bower_components'));
app.use('/',function(req,res,next){
    console.log(req.method+" "+req.url);
    next();
})


setupController(app);
apiController(app);

mongoose.connect(config.getDbConnectionString());
app.listen(port);