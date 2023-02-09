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

app.post('/login',(req,res)=>{
    const{name}=req.body

    if(name){
        res.render('login',{
            message:`Con le mani ciao ciao ${name}`})
    }else{
        res.status(400)
        .send('Inserisci il tuo nome')
    }
})


app.listen(PORT,()=>{
    console.log(`Server attivo su ${PORT}`)
})