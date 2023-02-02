//risorse integrate
const http = require(`http`)
const utenti = require('./utenti')
//creo server e imposto l'applicativo con il tipo di risorse da gestire
let server = http.createServer(function(req, res){

    res.writeHead(200,{'Content-Type': 'application/json'})//text/plain, text/html
    res.end(JSON.stringify(utenti));
    //creo risposta in stringa del mio json utenti
});

//provo a passare le impostazioni di server tramite una funzione callback che richiamo nel metodo listen
const callback = () =>{
    const address = server.address().address;//127.0.0.1 => indirizzo chiuso
    const port = server.address().port;
    console.log(`Server in ascolto su http://${address}:${port}`);
}

server.listen(8000, 'localhost', callback);
//leggo il json
console.log(utenti)


