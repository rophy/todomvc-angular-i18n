'use strict';

var express = require('express');

var app = module.exports = express();
var favicon = require('serve-favicon');

app.use(express.static(__dirname+'/www'));
app.use(favicon(__dirname + '/site-assets/favicon.ico'));
