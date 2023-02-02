//risorse integrate
const http = require('http')
const fs = require('fs')//sincronizzazione dei file

const server = http.createServer((req, res)=>{
    //scrivo un percorso root
if(req.url === '/'){
    res.writeHead(200, {'Content-type': 'text/html'});
    //creo variabile per la sincronizzazione dei file es.html
    let html = fs.readFileSync('index.html');
    res.end(html);
}else if(req.url === '/api/user'){
    res.writeHead(200, {'Content-type' : 'application/json'});
    const user = JSON.stringify({
        nome:'Ilenia',
        cognome:'Ingrassia'
    });
res.end(user)
}else{
    res.writeHead(404);
    res.end('Not found');
}
}).listen(8181);

console.log('Server attivo')