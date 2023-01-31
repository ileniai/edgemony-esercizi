//info per le navigazioni
const http = require('http')
const os = require('os')//modulo per il sistema operativo

//creo info che voglio recuperare
let cliente = os.userInfo();
let piattaforma = os.platform();
let data = new Date();//oggetto che deriva da javascript

//utilizzo il template literal dove inseriremo html e variabili
let messaggio = `<!DOCTYPE html>
<html>
<head>
</head>
<body>
<b>Il cliente <b>${cliente.username} </b>
ha iniziato il modulo node in data 
${data.getDate()}/${data.getMonth()}/${data.getFullYear()}
usando la piattaforma: ${piattaforma}</b>}
</body>
</html>`;

const server = http.createServer((req, res) => {
if(req.url ==='/')
    res.end(messaggio)
    
})

server.listen(3001)
console.log(messaggio)