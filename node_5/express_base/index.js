//express bisogna richiamrlo a differenza di nodemon
//importo il modulo (non è nativo)
const express = require('express')
const path = require('path')
//Path modulo nativo (legge e risolve i percorsi per andare a riprendere le risorse per es. index.html)

//creo l'applicazione col supporto di Express
const app = express()//qui viene incluso il server
const PORT = 8080


//ROUTING BASE
//utilizzo il metodo get e imposto dentro le parentesi i parametri
app.get('/', (req, res)=>{
    res.send('home page') //send() => gestisce la semplice stringa
})

app.get('/contatti', (req, res)=>{
    res.send('pagina contatti')
})

//gestisco json
app.get('/json', (reqq, res)=>{
    res.json({ //res.json gestisce automaticamente la corretta lettura di json
        nome: "Ilenia"
    })
})

//gestisco un file html considerando il percorso e la risorsa
app.get('/benvenuto', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'index.html'))//solo con index.html in console risulta errore
})//percorso relativo


app.get('*', (req, res)=>{
    res.send('404 | pagina non trovata')
})

//metto in ascolto il server
app.listen(PORT, ()=>{
    console.log(`Server attivo su ${PORT}`)
})
