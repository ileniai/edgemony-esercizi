//Importo modulo Express
const express = require('express')

//creo l'applicazione col supporto di Express
const app = express()
const PORT = 5001

//assegno metodo static
app.use(express.static('public'))

//ROUTING BASE
app.get('/', (req, res)=>{ 
    res.sendFile(__dirname, + '/public/index.html')
})   

app.get('/presentazione', (req, res)=>{
    res.sendFile(__dirname, + '/public/presentazione.html')
    
})

app.get('/hobby', (req, res)=>{
    res.sendFile(__dirname, + '/public/hobby.html')
    
})

app.get('/conclusione', (req, res)=>{
    res.sendFile(__dirname, + '/public/conclusione.html')
   
})

app.get('*', (req, res)=>{
    res.send('404 | pagina non trovata')
})


//metto in ascolto il server
app.listen(PORT, ()=>{
    console.log(`Server attivo su ${PORT}`)
})

























