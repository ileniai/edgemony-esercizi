//Importo modulo Express
const express = require('express')
//importo json
const users = require('./users.json')

//creo l'applicazione col supporto di Express
const app = express()
//creo porta
const PORT = 8000


//ROUTING DELL'APPLICAZIONE
app.get('/',(req, res)=>{
    res.send('Home')
})

app.get('/:id', (req, res)=>{
    res.send(`L'id indicato è: ${req.params.id}`)
})
/*risultato in localhost
http://localhost:8000/34
L'id indicato è: 34*/



app.get('/users/:name/:id/:username', (req, res)=>{
    res.send(`L'utente con id 
    ${req.params.id} ha come nome
    ${req.params.name} e come cognome  
    ${req.params.username}`)
}) 
/*risultato in localhost
http://localhost:8000/users/Ilenia/4/Ingrassia
L'utente con id 4 ha come nome Ilenia e come cognome Ingrassia*/



app.get('/users/:valore', (req,res)=>{
    res.send(`valore = ${req.params.valore}`)
})
/*risultato in localhost
http://localhost:8000/users/Ilenia
valore = Ilenia*/



app.listen(PORT, ()=>{
    console.log(`Server attivo sulla porta ${PORT}`)
})