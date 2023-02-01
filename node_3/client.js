const net = require('net')//creo la rete

const HOSTNAME = "localhost" 
const PORT = 5000
//le costanti si scrivono in maiuscono

//creo socket|crea connessione
//è una presa che il client deve utilizzare

const socket = net.connect(HOSTNAME, PORT)//il client ricerca la connessione, prende due parametri

socket.write('Ilenia')
//attiviamo
socket.on("data", (data)=>{ //gli facciamo gestire un oggetto
    console.log(data.toString())
})