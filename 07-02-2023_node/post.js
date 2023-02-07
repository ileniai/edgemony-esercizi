const express = require('express')
const users = require('./users.json')
const app = express()

const PORT = 8000

//middlewere per risorse statiche
app.use(express.static('./public'))

//codifica le analisi delle url
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//ROUTING 
app.get('/api/users',(req,res)=>{
    res.status(200).json({success:true, users:users})
})

//METODO POST
app.post('/api/users',(req,res)=>{
    const {id, name} = req.body
    if(!id || !name){
        return res
        .status(400)
        .json({success:false, msg:'non trovo un dato necessario'})
    }
        return res
        .status(200)
        .json({success:true, person: {id:id, name:name} })
})





app.listen(PORT,(req, res)=>{
    console.log(`Server in ascolto sulla porta ${PORT}`)
})