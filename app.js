var server = require('./server');

var fs = require('fs');
var path = require('path');

var files = fs.readdirSync('./www/bundles');
var langs = [];
files.forEach(function(file) {
	if (file.indexOf('msg_')===0 && path.extname(file) == '.json') {
		langs.push(path.basename(file, '.json').replace('msg_',''));
	}
});

fs.writeFileSync('./www/bundles.json', JSON.stringify(langs));

server.listen(8080, function(err) {
  console.log(err, 'listening to port 8080');
});