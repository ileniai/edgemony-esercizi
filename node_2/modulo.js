//importo\richiamo i file fatti su myModule

const http = require('http')
const myModule = require('./myModule');//vanno senza js

let server = http.createServer(function(req, res){

    res.writeHead(200);
    res.end('server avviato')
})

server.listen(5000)

myModule.sayHello();
myModule.bye();

//se creo più cartelle es node_2 sul terminale posso aprire
//più pagine con porte diverse

//se creo una sola cartella devo cancellare ctrl+c e salvare 
//ogni volta per vedere il risultato