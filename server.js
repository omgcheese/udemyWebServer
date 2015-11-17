var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res){

	res.send("This page is about us!!!!");
});

app.use(express.static('/Users/jinwooklee/web-server/public'));
//console.log(__dirname);

app.listen(PORT, function () {
	console.log("Express server started! Port: " + PORT);
});