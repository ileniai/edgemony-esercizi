const express = require('express')
const hbs = require('hbs')
const session = require('cookie-session')
const bodyParser = require('body-parser')
//importo il routers
const router = require('./router')
const app = express()
const PORT = 4040

app.use('/',router)
app.use(bodyParser.urlencoded({extended:true}))
app.use(session({secret:'La mia sessione'}))

app.set('view engine','hbs')
hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static('./public'))


app.listen(PORT,()=>{
    console.log(`Server attivo su ${PORT}`)
})