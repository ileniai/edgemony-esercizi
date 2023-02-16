const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
let url = "";
mongoose.connect('mongodb+srv://ileniai:Edgemony2023@cluster0.dluvbwt.mongodb.net/articoli?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
    if (!err) {
        console.log('MongoDB connesso.')
    }
    else {
        console.log(`Problemi con la connessione:  ${err}`)
    }
});


require('./nota');
require('./articoli');