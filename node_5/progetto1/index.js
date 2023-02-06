const express = require('express')

//creo l'applicazione col supporto di Express
const app = express()//qui viene incluso il server
const PORT = 8080

/*risolutore per temmplate statico
vado a localizzare i percorsi statici
uso il metodo static che è il middleware per le risorse statiche
use introduce l'uso dei middlewares
qualsiasi middleware che sia static o uno che creo io vengono
sempre invocate da USE*/
app.use(express.static('public'));

app.get('/', (req, res)=>{
    //res.send('home page') 
    res.sendFile(__dirname, + '/public/index.html')
})   

app.get('/contatti', (req, res)=>{
    res.sendFile(__dirname, + '/public/contatti.html')
    })


app.get('/servizi', (req, res)=>{
    res.sendFile(__dirname, + '/public/servizi.html')
})

app.get('*', (req, res)=>{
    res.send('404 | pagina non trovata')
})

//metto in ascolto il server
app.listen(PORT, ()=>{
    console.log(`Server attivo su ${PORT}`)
})
