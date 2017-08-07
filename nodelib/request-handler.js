var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('../webpack.config.js');
var Promise = require('bluebird');
var bodyParser = require('body-parser');
var db = require('./Mondb');
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

app.use(bodyParser.json({ type: '*/*' }));

//basic routes
//need to setup a url parser to make life easier.  


app.get('/', (req, res) => {
  res.send('index.html');
})


app.post('/', (req, res) => {
  // initiate DB call for destination doc
  let dest = req.body.destination;
  db.find({ 'name' : `${dest}` }, (err, result) => {
    if (err) console.log('error', err);
    res.send(result);
    console.log(result);
  })
  console.log('we got a request!! engage respnse engines!!! ', req.body);
})


module.exports = app;