require('./models/DBconfig');

const express = require('express');
const hbs = require('hbs');
const bodyparser = require('body-parser');

const routes = require('./controllers/routes');
const routerScarpe = require('./controllers/routesScarpe');

let app = express();
const mongoose = require('./models/DBconfig')


const spmRouter = require('./controllers/routesScarpe')
const PORT = 8000

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('./public'))


app.use(bodyparser.urlencoded({
    extended: true
}));
//IMPOSTO IL PERCORSO RELATIVO ALLA RISORSA ARTICOLI
app.use('/articoli', routerScarpe);
app.use('/', routes);

app.use(express.json())
app.use('/api/v1/articoli', spmRouter)

app.listen(PORT, () => {
    console.log(`Server  ascolta sulla porta ${PORT}`);
});

