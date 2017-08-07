var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/packing') //new database needed 

var db = mongoose.connection;

db.on('error', console.error.bind(console,'conneciton error;'));

var Schema = mongoose.Schema;

var destinationSchema = new Schema({
  name: String, //destination city name
  toPack: [String],
});

var Destination = mongoose.model('destination', destinationSchema);

var london = new Destination({
  name: 'London',
  toPack: [
    'Pants', 'Shirts', 'Undershirts', 'Underwear', 'Socks', 'Toothbrush', 'toothpaste', 'Shaving razor', 'Facewash', 'Comb', 'Deodorant', 'Walking Shoes', 
  'Fancy Shoes','Ties', 'Dress Jacket', 'Water-resistant jacket', 'Sweater',
  ]
});

london.save((err, london) => {
  if (err) { return console.error(err); }
  console.log('saved');
});

//what needs to be in the data object?  
//city name: 
//things to pack:


//later features 
  //time of year modifiers
    //i.e. rainy season/summer/winter



module.exports = Destination;