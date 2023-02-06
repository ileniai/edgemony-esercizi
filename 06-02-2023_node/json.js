//Importo modulo Express
const express = require('express')
//importo autorizzazione
const authorize = require('./auth')
const path = require('path')
//importo json
const books = require('./books.json')

//creo l'applicazione col supporto di Express
const app = express()
const PORT = 5001

//assegno metodo static
app.use(express.static('public'))

//ROUTING BASE
app.get('/', (req, res)=>{
    res.sendFile (path.resolve(__dirname, + '/public/index.html'))
})


app.get('/api/books',(req, res)=>{
    res.json(books)
})


app.get('/api/books/:product', authorize,(req, res)=>{
    const firstProduct = books.map((product) =>{
        const {id, title, author} = product
        return {id, title, author}
    })
    res.json(firstProduct)
})



app.listen(PORT, ()=>{
    console.log(`Server attivo su ${PORT}`)
})
