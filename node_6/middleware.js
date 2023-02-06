const express = require('express')
const logger = require('./logger')

const app = express()

//in questa posizione il middleware è chiamato su tutti i percorsi
//app.use(logger)
app.get('/', (req, res)=>{
    res.send('home')
})

app.get('/about', (req,res)=>{
    res.send('Ciao a tutti')
})

/*in  questo caso il middlewere è passato come paramentro
è richiamato in maniera specifica sono per la rotta contatti*/
app.get('/contatti', logger, (req,res)=>{
    res.send('Contattami')
})


app.listen(3000, ()=>{
    console.log(`Server in ascolto sulla porta: 3000`)
})

//per prendere un solo percordo lo USE deve essere inserito dentro il percorso