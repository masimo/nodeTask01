var mongoose = require('mongoose');
var fs = require('fs');

var jf = require('jsonfile'),
	util = require('util');

var db = mongoose.connection;

var DATA_FILE = './data/data_test.json';


db.on('error', console.error);
db.once('open', function() {

	var newData = [];

	var theObject = new mongoose.Schema({
		id: Number,
		Name: String,
		Price: Number,
		rating: Number
	});

	// Compile a 'Movie' model using the theObject as the structure.
	// Mongoose also creates a MongoDB collection called 'Movies' for these documents.
	var Item = mongoose.model('Item', theObject);

	/*
	jf.readFile(DATA_FILE, function(err, obj) {
		console.log(util.inspect(obj));
	});*/

	fs.readFile(DATA_FILE, 'utf8', function(err, data) {

		data = JSON.parse(data);

		for (var i = 0, len = data.length; i < len; i++) {
			//if (i == 1) return;

			console.log(data[i]);

		};



		/*json.forEach(function(value, key) {

			if (!key) return;

			var itemsCollection = new Item({
				id: value[0],
				Name: value[1],
				Price: value[2],
				rating: value[3]
			});

				itemsCollection.save(function(err, itemsCollection) {
				if (err) return console.error(err);
				//console.dir(itemsCollection);
			});

		});*/
	});
	/*
	fs.readFile(DATA_FILE, 'utf8', function(err, data) {
		if (err) {
			console.error(err)
		};



		data.forEach(function(value, key) {

			if (!key) return;

			var itemsCollection = new Item({
				id: value[0],
				Name: value[1],
				Price: value[2],
				rating: value[3]
			});

			itemsCollection.save(function(err, itemsCollection) {
				if (err) return console.error(err);
				//console.dir(itemsCollection);
			});

		});

	});*/



	/* itemsCollection.save(function(err, itemsCollection) {
if (err) return console.error(err);
console.dir(itemsCollection);
}); */

	// Find a single movie by name.
	/*	Movie.findOne({
		title: 'Thor'
	}, function(err, thor) {
		if (err) return console.error(err);
		console.dir(thor);
	});*/

	// Find all movies.
	/*Item.find(function(err, itemsCollection) {
		if (err) return console.error(err);
		console.dir(itemsCollection);
	});*/

	// Find all itemsCollection that have a credit cookie.
	/*Item.find({
		hasCreditCookie: true
	}, function(err, itemsCollection) {
		if (err) return console.error(err);
		console.dir(itemsCollection);
	});*/

	/*	theObject.statics.findAllWithCreditCookies = function(callback) {
		return this.find({
			hasCreditCookie: true
		}, callback);
	};

	// Use the helper as a static function of the compiled Movie model.
	Movie.findAllWithCreditCookies(function(err, itemsCollection) {
		if (err) return console.error(err);
		console.dir(itemsCollection);
	});*/
});

mongoose.connect('mongodb://localhost/user');