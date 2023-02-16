const mongoose = require('mongoose');

var scarpaSchema = new mongoose.Schema({
    model: {
        type: String,
        
    },
     brand: {
        type: String,
      
    },
    number: {
        type: Number,
    },
    price: {
        type: Number,
    },
    utils: {
        type: String,
    },
    color: {
        type: String,
    },
    category: {
        type:String
    }
});

mongoose.model('scarpeModel', scarpaSchema);