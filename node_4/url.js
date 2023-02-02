const http = require('http')
const url = require('url')

let server = http.createServer(function(req, res){
    //faccio analisi
    let page = url.parse(req.url).pathname;//analizzo un percorso pathname
    console.log(page);

    res.writeHead(200,{'Content-type': 'text/plane'});

    //creo il percorso
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