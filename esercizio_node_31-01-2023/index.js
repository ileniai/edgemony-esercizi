//creo modulo per il sistema operativo

const http = require('http')
const os = require('os')
const fs = require('fs')

const productList = fs.readFileSync('prodotti.html')
const clientList = fs.readFileSync('clienti.html')

let cliente = os.userInfo();
let piattaforma = os.platform();
let data = new Date();

//creo variabili
let messaggio = `<!DOCTYPE html>
<html>
<head>
</head>
<body>
<b>Il cliente<b>${cliente.username}
titolare del pc indica il giorno e l'anno 
${data.getDate()}/${data.getFullYear()}
per indicare l'inizio del modulo Node usando: ${piattaforma}
come piattaforma per conto di Ilenia</b>
</body>
</html>`;

const server = http.createServer((req, res) => {
if(req.url ==='/')
    res.end(messaggio)
else if(req.url === '/prodotti') 
    res.end(productList)
else if(req.url === '/clienti')
    res.end(clientList)
    
})

server.listen(5000)
console.log(messaggio)