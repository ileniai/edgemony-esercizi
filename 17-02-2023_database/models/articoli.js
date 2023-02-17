const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
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
    },
    name:{
        type: String,
        required: true
    },
    channel:{
        type: String,
        required: true
    },
    dateSub: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

module.exports = mongoose.model('scarpeModel', scarpaSchema);