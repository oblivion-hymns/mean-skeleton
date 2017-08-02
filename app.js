var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

var appPort = 3000;
var dbPort = 27017;
var dbName = 'mean-skeleton';
global.__basePath = __dirname + '/';

//Initialize app
var app = express();
app.listen(appPort, function(){
	console.log(`Listening on port ${appPort}...`);
});

//Connect to database
mongoose.connect(`mongodb://localhost:${dbPort}/${dbName}`, {useMongoClient: true});

//Configure view rendering
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'hbs');

//Configure app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//Attach headers to every response so we can actually be valid
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
	next();
});

//Determine if app should be allowed to use Sequoia at all
app.use(function(req, res){
	return res.render('index');
});

module.exports = app;
