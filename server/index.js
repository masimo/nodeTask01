var express = require('express');
var fs = require('fs');

var API_URL = '/normal';

exports.start = function(PORT, STATIC_DIR) {
	var app = express();

	app.use(express.compress());

	// serve static files for demo client
	app.use(express.static(STATIC_DIR));

	// parse body into req.body
	app.use(express.bodyParser());

	app.get(API_URL, function(req, res, next) {

		
		console.log(res);
		//res.send(200, );

	});



	app.listen(process.env.PORT || 3000);

};