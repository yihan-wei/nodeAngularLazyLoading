var express = require('express');
var app = express();
var config = require('./config');
var mongoose = require('mongoose');
var setupController = require('./controller/setupController');
var apiController = require('./controller/apiController');
var port = process.env.PORT || 3000;

app.use(express.static(__dirname+'/public'));
app.use('/',function(req,res,next){
    console.log(req.method+" "+req.url);
    next();
})

app.get('/', function(req,res)
{	
	console.log(req.url);
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/view*', function(req,res)
{	
	console.log(req.url);
    res.sendFile(__dirname + '/public/index.html');
});

setupController(app);
apiController(app);

mongoose.connect(config.getDbConnectionString(),config.options);
var conn = mongoose.connection;
conn.on('error',console.error.bind(console,'connection error'));
app.listen(port);
console.log("Server started on port 3000");