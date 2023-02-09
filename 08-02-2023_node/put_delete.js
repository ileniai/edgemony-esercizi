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


//METODO PUT in cui modifico l'elemento tags con id 4
app.put('/api/articoli/:id',(req,res)=>{
    const{id} = req.params
    const {tags} = req.body

    const object = articoli.find((object) => object.id === Number (id))
 
  
    if(!object){
        return res
        .status(400)
        .json({success:false, msg:`non c'è nessuno con id: ${id}`})
    }
    const newList = articoli.map((object)=>{
        if(object.id === Number(id)){
            object.tags = tags
        }
        return object
    })
        res.status(200).json({success:true, articoli:newList})
})


//metodo DELETE in cui elimino l'intero elemento con id 5
app.delete('/api/articoli/:id',(req,res)=>{
    const object = articoli.find((object)=> object.id === Number (req.params.id))

    if(!object){
        return res
        .status(400)
        .json({success:false, msg: `non c'è nessuno con id ${req.params.id}`})
    }
    const newList = articoli.filter((object)=> object.id !== Number (req.params.id))
        return res
        .status(200)
        .json({success:true, data:newList})


})

app.listen(PORT,(req, res)=>{
    console.log(`Server in ascolto sulla porta ${PORT}`)
})