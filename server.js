var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit!');
		next();
	},
	logger: function (req,res,next){
		//new Date().toString()
		var date = new Date().toString();
		console.log('request: ' + date + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res){

	res.send("This page is about us!!!!");
});

app.use(express.static('/Users/jinwooklee/web-server/public/'));
//console.log(__dirname);

app.listen(PORT, function () {
	console.log("Express server started! Port: " + PORT);
});