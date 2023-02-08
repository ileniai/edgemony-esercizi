//Importo modulo Express
const express = require('express')
//importo json
const articoli = require('./articoli.json')

//creo l'applicazione col supporto di Express
const app = express()
//creo porta
const PORT = 8001


//ROUTING DELL'APPLICAZIONE
app.get('/',(req, res)=>{
    res.send('Home')
})

app.get('/:id', (req, res)=>{
    res.send(`L'id indicato è: ${req.params.id}`)
})
/*risultato in localhost
http://localhost:8001/27
L'id indicato è: 27*/



app.get('/articoli/:title/:id/:tags', (req, res)=>{
    res.send(`L'utente con id 
    ${req.params.id} ha letto il libro 
    ${req.params.title}. Il genere di questo libro è: 
    ${req.params.tags}`)
}) 
/*risultato in localhost
http://http://localhost:8001/articoli/Mother/4/crime
L'utente con id 4 ha come nome Ilenia e come cognome Ingrassia*/


app.listen(PORT, ()=>{
    console.log(`Server attivo sulla porta ${PORT}`)
})