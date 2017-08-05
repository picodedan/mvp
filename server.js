var app = require('./nodelib/request-handler');

var port = 3458;

app.listen(port, () => {
  console.log('now serving on port', port);
});