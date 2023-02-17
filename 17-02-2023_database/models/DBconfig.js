const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
let url = "";
mongoose.connect(process.env.DATABASE_URL,
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

const db = mongoose.connection

db.on('error', (error)=> console.error(error))

db.once('open', ()=> console.log('Connesso al db'))

//app.use(express.json())

//ROUTING

//app.use('/api/v1/articoli', spmRouter)


require('./nota');
require('./articoli');