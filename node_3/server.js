const net = require('net')

const HOSTNAME = "localhost" 
const PORT = 5000

//creare il server
net.createServer((socket)=>{
    socket.on("data", (name) => {//crea una risposta
        socket.write(`Ciao ${name}!`)
    })
}).listen(HOSTNAME, PORT)//appendiamo i paramentri
//name è Ilenia messo su client

//attivo contemporaneamente client e server