const net = require('net')

const HOSTNAME = "localhost"
const PORT = 5000

//creare il server
net.createServer((socket)=>{
    console.log(`Server connesso alla porta${PORT}`);

    socket.on("data", (name) => {//crea una risposta
        socket.write(`Ciao ${name}!`);
    })
}).listen(PORT, HOSTNAME)//appendiamo i paramentri
//name è Ilenia messo su client

//attivo contemporaneamente client e server

//errori 500 errori server
//errore 404 errore lato client