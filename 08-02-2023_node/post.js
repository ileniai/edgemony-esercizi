const express = require('express')
const articoli = require('./articoli.json')
const app = express()

const PORT = 8001

//middlewere per risorse statiche
app.use(express.static('./public'))

//codifica le analisi delle url
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//ROUTING 
app.get('/api/articoli',(req,res)=>{
    res.status(200).json({success:true, articoli:articoli})
})

//METODO POST
app.post('/api/articoli',(req,res)=>{
    const {id, body, tags} = req.body
    if(!id || !body || !tags){
        return res
        .status(400)
        .json({success:false, msg:'non trovo un dato necessario'})
    }
        return res
        .status(200)
        .json({success:true, articoli: {body:body, tags:tags} })
})

//aggiungo  "id": 6, "body": "categoria libri da leggere", "tags": "fantasy"
app.post('/api/articoli/new',(req,res)=>{
    const {id, body, tags} = req.body

    if(!id || !body || !tags){
            return res
            .status(400)
            .json({success:false, msg:'non trovo un dato necessario'})
        }
            return res
            .status(201)
            .json({success:true, articoli: [...articoli, {id:id, body:body, tags:tags}]})
    })



 //METODO POST CON DATO RICEVUTO DA FORM in cui specifico che il Genere libro è fantasy
app.post('/login',(req,res)=>{
    const{tags} = req.body

    if(!tags){
        return res
        .status(400)
        .json({success:false, msg:'non trovo nessun tags'})
    }

    if(tags){
        return res
        .status(200)
        .send(`Il genere del libro è ${tags}`)

    }
})


app.listen(PORT,(req, res)=>{
    console.log(`Server in ascolto sulla porta ${PORT}`)
})