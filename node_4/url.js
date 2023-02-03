const http = require('http')
const url = require('url')
const queryString = require('querystring');
const { createBrotliCompress } = require('zlib');

//creo server
    let server = http.createServer(function(req, res){
//faccio analisi dei percorsi
    let page = url.parse(req.url).pathname;//analizzo un percorso pathname
    console.log(page);

//analisi di una query string
    let queryStr = url.parse(req.url).query;
    console.log(queryStr);

    res.writeHead(200,{'Content-type': 'text/plane'});

//creo il modulo querystring per gestire i parametri delle query
//parse = analisi 
    let params = queryString.parse(queryStr);//params lavorerà come un arrey
    if(params['nome']){
        res.write(`Il tuo nome è ${params['nome']}\n`)
    }

    if(params['cognome']){
        res.write(`Il tuo cognome è ${params['cognome']}\n`)
    }

    if(page === '/'){
        res.write('sei nella home');
    }
    else if(page === '/utente'){
        res.write('sei nella pagina utente');
    }
    else if(page === '/utente/page2'){
        res.write('Sei alla seconda pagina');
    }
    else{
        res.write('not found');
    }
    res.end();

}).listen(8081);


//http://localhost:8081/utente/page2?nome=ilenia&cognome=ingrassia
//modifica dei dati(crearli\leggerli\modificare\eliminarli)(GET, PUT|PATCH| DELITE)
//   \n si usa per mettere lo spazio tra una frase e l'altra