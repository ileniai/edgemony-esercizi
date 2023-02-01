const net = require('net')

const HOSTNAME = "localhost" 
const PORT = 3001

//creo il server
net.createServer((socket)=>{
    console.log(`Server connesso alla porta ${PORT}`)
    socket.on("data", (name) => {
        socket.write(`Ciao ${name}!`)
    })
}).listen(HOSTNAME, PORT)