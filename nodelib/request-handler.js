var express = require('express');
var Promise = require('bluebird');
//var db = (mogoose);//mongoose
//space for additional reqs

var app = express();
app.use(express.static('public'));
app.use(express.static('lib'))


//basic routes

app.get('/', (req, res) => {
  res.send('index.html');
})


app.post('/', (req, res) => {
  // initiate DB call for destination doc
})


module.exports = app;