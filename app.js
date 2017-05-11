var server = require('./server');

server.listen(8080, function(err) {
  console.log(err, 'listening to port 8080');
});