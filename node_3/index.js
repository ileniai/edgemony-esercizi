//metodo require() => richiamo il modulo built-in
//modulo built-in


const http = require(`http`);//creato oggetto

//crea percorsi server
let server = http.createServer(function(req, res){

    //200 è lo status che indica il successo della richiesta|risposta
    res.writeHead(200,{"Content-Type": "text/html"})
    res.write('<!DOCTYPE html>'+
    '<html>'+
    '<head>'+
    '<title>'+
    'Home page'+
    '</title>'+
    '</head>'+
    '<body>'+
    '<h1>Questa è la mia pagina home</h1>'+
    '</body>'+
    '</html>'
    )

    res.end();

})

server.listen(8080);

//`..` i template literal si mettono all'inizio e alla fine
//quando inseriamo questo non si mette il concatenatore +

