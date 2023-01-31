//metodo require() => richiamo il modulo built-in

const http = require(`http`);//creato oggetto

//crea percorsi server
const server = http.createServer((req, res) => {

//imposto i percorsi

    if(req.url === `/`)
        res.end(`Home`)
    
   else if(req.url === `/studenti`)
    res.end(`pagina studenti`)

   else if(req.url === `/corsi`)
    res.end(`pagina dedicata ai corsi`)

    else{
        //codice di errore per risorsa non trovato
        res.writeHead(404)
        res.end(`pagina non trovata`)
    }
})

//scelta di una porta sulla quale lavorare
server.listen(3000);