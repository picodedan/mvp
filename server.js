var app = require('./nodelib/request-handler');

const server = app.listen(3458, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log('now serving from ',host, port);
});