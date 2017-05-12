var server = require('./server');

var listener = server.listen(process.env.PORT || 8080, function(err) {
  console.log(err, 'listening to port ' + listener.address().port);
});