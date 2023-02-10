const express = require('express')
const hbs = require('hbs')
//importo il router
const router = require('./router')
const app = express()
const PORT = 4040

app.use('/',router)

app.set('view engine','hbs')
hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static('./public'))


app.listen(PORT,()=>{
    console.log(`Server attivo su ${PORT}`)
})