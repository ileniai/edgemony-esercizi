//risorse integrate
const http = require('http')
const fs = require('fs')
const quotes = require('./quotes')
const PORT = 8081

//Creo server e il collegamento alla risorsa JSON
const server = http.createServer((req, res)=>{
if(req.url === '/'){
    res.writeHead(200, {"Content-Type": 'text/html'})
    const root = fs.readFileSync('root.html');
    res.end(root);

}else if(req.url === '/chi_sono.html'){
    res.writeHead(200, {"Content-Type": 'text/html'})
    const chiSono = fs.readFileSync('chi_sono.html');
    res.end(chiSono);

}else if(req.url === '/api/quotes'){
    res.writeHead(200, {"Content-Type": 'application/json'})
    res.end(JSON.stringify(quotes))
}else{
    res.writeHead(404)
    res.end('Pagina non presente');
}
}).listen(8081)

console.log('Server attivo')



