var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('../webpack.config.js');
var Promise = require('bluebird');
//var db = (mogoose);//mongoose
//space for additional reqs

var app = express();

var compiler = webpack(webpackConfig);


app.use(express.static('public'));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));


//basic routes
//need to setup a url parser to make life easier.  


app.get('/', (req, res) => {
  res.send('index.html');
})


app.post('/', (req, res) => {
  // initiate DB call for destination doc
  console.log('we got a request!! engage respnse engines!!! ', req);
  res.send(201);
})


module.exports = app;