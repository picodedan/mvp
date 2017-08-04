var express = require('express');
var Promise = require('bluebird');
var db = (mogoose);//mongoose
//space for additional reqs

var app = express();

//basic routes

app.get('/', (res,req) => {
  //server up base page and public resources
})


app.post('/', (res,req) => {
  // initiate DB call for destination doc
})


module.exports = app;