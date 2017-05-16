'use strict';

var express = require('express');
var gpClient = require('g11n-pipeline').getClient({
	credentials: {
		url: process.env.GP_URL,
		userId: process.env.GP_USERID,
		password: process.env.GP_PASSWORD,
		instanceId: process.env.GP_INSTANCEID
	}
});


var app = module.exports = express();
var favicon = require('serve-favicon');


app.get('/translations', function(req, res, next) {
	var bundle = gpClient.bundle(process.env.GP_BUNDLEID);
	bundle.getInfo( function(err, info) {
		if (err) {
			res.status(500).send(err);
		} else {
			info.targetLanguages.unshift(info.sourceLanguage);
			res.send(info.targetLanguages);
		}
	});
});

app.get('/credentials', function(req, res, next) {
	res.send({
		url: process.env.GP_URL,
		userId: process.env.GP_USERID,
		password: process.env.GP_PASSWORD,
		instanceId: process.env.GP_INSTANCEID,
		bundleId: process.env.GP_BUNDLEID
	});  
});

app.use(express.static(__dirname+'/www'));
app.use(favicon(__dirname + '/site-assets/favicon.ico'));
