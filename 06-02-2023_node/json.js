//Importo modulo Express
const express = require('express')
//importo autorizzazione
const authorize = require('./auth')
//const path = require('path')
//importo json
const {products} = require('./books')

//creo l'applicazione col supporto di Express
const app = express()
const PORT = 5001

//assegno metodo static
app.use(express.static('public'))

//ROUTING BASE
app.get('/', (req, res)=>{
    res.sendFile(__dirname, + '/public/index.html')
})


app.get('/api/books',(req, res)=>{
    res.json(products)
})


app.get('/api/books/:product', authorize,(req, res)=>{
    const firstProduct = products.map((product) =>{
        const {id, title, author} = product
        return {id, title, author}
    })
    res.json(firstProduct)
})



app.listen(PORT, ()=>{
    console.log(`Server attivo su ${PORT}`)
})
