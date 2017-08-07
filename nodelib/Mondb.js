var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/packing') //new database needed 

var db = mongoose.connection;

db.on('error', console.error.bind(console,'conneciton error;'));
db.once('open' , () => {

  var Schema = mongoose.Schema;

  var itemSchema = new Schema({ name: String })

  var destinationSchema = new Schema({
    name: String, //destination city name
    clothing: [itemSchema],
    toiletries: [itemSchema],
    shoes: [itemSchema],
    accessories: [itemSchema]
  });

  var Destination = mongoose.model('destination', destinationSchema);

  var london = new Destination({
  name: 'London',
  clothing: [
    { name: 'Pants' },
    { name: 'Shirts' },
    { name: 'Undershirts' },
    { name: 'Underwear' },
    { name: 'Socks' }
  ],
  toiletries: [
    { name: 'Toothbrush' },
    { name: 'toothpaste' },
    { name: 'Shaving razor' },
    { name: 'Facewash' },
    { name: 'Comb' },
    { name: 'Deodorant' },
  ],
  shoes: [
    { name: 'Walking Shoes' },
    { name: 'Fancy Shoes' },
  ],
  accessories: [
    { name: 'Ties' },
    { name: 'Dress Jacket' },
    { name: 'Water-resistant jacket' },
    { name: 'Sweater' },
  ]
})
  london.save((err, london) => {
    if (err) return console.error(err);
    console.log('saved');
  })

});

//what needs to be in the data object?  
//city name: 
//things to pack:


//later features 
  //time of year modifiers
    //i.e. rainy season/summer/winter



module.exports = db