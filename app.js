var express = require('express');
var path = require('path');

var bodyParser = require('body-parser');

//routes

var index = require('./routes/index');
var tasks = require('./routes/tasks');


var app = express();

//view engine

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/', index);


app.use('/', function(req,res){
	res.send('Hello Dev');
});


app.listen(3000, function(err, res){
	console.log('Server has been started');
});