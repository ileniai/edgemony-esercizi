//Creo un server che risponde alla porta 3001

const http = require(`http`);
const PORT = 3001;

// creo variabili usando text/plane e includendo lo status code 200 e l'errore 404

let articoli = `<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <h1>ARTICOLI</h1>
</body>
</html>`;
let commenti = `<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <h1>COMMENTI</h1>
</body>
</html>`;
let utenti =`<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <h1>UTENTI</h1>
</body>
</html>`;
    
const server = http.createServer((req, res)=>{
    console.log(`Server in esecuzione sulla porta ${PORT}`);
if(req.url ==='/ARTICOLI'){
    res.writeHead(200, {"Content-Type": "text/plain"})
    res.write(`${articoli}`)
    res.end('articoli')
} else if (req.url === '/COMMENTI'){
    res.writeHead(200, {"Content-Type": "text/plain"})
    res.write(`${commenti}`)
    res.end(commenti)
}else if (req.url === '/UTENTI'){
    res.writeHead(200, {"Content-Type": "text/plain"})
    res.write(`${utenti}`)
    res.end(utenti)
}else {
    res.writeHead(404, {"Content-Type": "text/plain"})
    res.write('Pagina non trovata');
}
})
    
//Formatto usando la modalità literal template.
server.listen(PORT, ()=>{
    console.log(`Server in esecuzione sulla porta ${PORT}`);
})
