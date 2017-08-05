var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/') //new database needed 

var Schema = mongoose.Schema;

var destinationSchema = new Schema({
  name: String, //destination city name
  clothing: {},
  toiletries: {},
  shoes: {},
  accessories: {}
});

var Destination = mongoose.model('destination', destinationSchema);

var london = new Destination({
  name: london,
  clothing: {

  },
  toiletries: {

  },
  shoes: {

  },
  accessories: {
    
  }
})

//what needs to be in the data object?  
//city name: 
//things to pack:


//later features 
  //time of year modifiers
    //i.e. rainy season/summer/winter



module.exports = Destination