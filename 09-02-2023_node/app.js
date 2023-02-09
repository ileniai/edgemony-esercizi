//Importo modulo Express
const express = require('express')
const hbs = require('hbs')
const app = express()
const PORT = 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('./public'))
const myPreferences = [
    {
        pet:"Cane",
        color:"Bianco",
        season:"estate"
    }
]


//IMPOSTAZIONE VIEW = creo interfacce 
app.set('view engine', 'hbs')
//REGISTRAZIONE
hbs.registerPartials(__dirname + '/views/partials');

//ROUTER
app.get('/',(req,res)=>{
    res.render('home' ,{
        nome: 'Ilenia',
        titolo: 'sincronicità degli elementi',
        myPreferences: myPreferences[0]
    })
})


app.get('/about',(req,res)=>{
    res.render('about',{
        titolo:'esercitazione_node'
    })
})

app.get('/mi-presento',(req,res)=>{
    res.render('mi-presento',{
        titolo:'Mi-presento'
    })
})

app.get('/login',(req,res)=>{
    res.render('login',{
        titolo:'Login'
    })
})


app.listen(PORT,()=>{
    console.log(`Server attivo su ${PORT}`)
})