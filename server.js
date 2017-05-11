'use strict';

var express = require('express');
var requestLanguage = require('express-request-language');

var app = module.exports = express();
var favicon = require('serve-favicon');

app.use(requestLanguage({
	languages: ['en-US', 'zh-CN', 'zh-TW']
}));

app.get('/language', function(req, res, next) {
	res.send(req.language);
});
app.use(express.static(__dirname+'/www'));
app.use(favicon(__dirname + '/site-assets/favicon.ico'));
