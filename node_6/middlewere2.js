const express = require('express')
const logger = require('./logger')
const authorize = require('./auth')

const app = express()

app.get('/', (req, res)=>{
    res.send('home')
})

app.get('/about', (req,res)=>{
    res.send('Ciao a tutti')
})


app.get('/contatti', (req,res)=>{
    res.send('Contattami')
})

//la priorità va al 1 middlewere che scrivo
app.get('/api/products', [logger, authorize], (req, res)=>{
    res.send('pagina prodotti')
})



app.listen(3000, ()=>{
    console.log(`Server in ascolto sulla porta: 3000`)
})
