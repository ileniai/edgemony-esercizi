const express = require('express')
const {people} = require('./data')
const app = express()

const PORT = 3000

//middlewere per risorse statiche
//l'impostazione di public ha la priorità su altre strutture
app.use(express.static('./public'))


//codifica le analisi delle url
app.use(express.urlencoded({extended: true}))
//urlencoded codifica delle url extended estesa
app.use(express.json())



//ROUTING 
//questo quindi possiamo anche non scriverlo l'importante è crearli
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/idex.html')
})
//questo si deve scrivere
app.get('/entra',(req,res)=>{
    res.sendFile(__dirname + '/public/form.html')
})




app.get('/api/people',(req,res)=>{
    //res.status(200).json({success:true, data:people})
    res.status(200).json({success:true, data:people})
})

//Inviamo i dati alla nostra app
//METODO HTTP POST
app.post('/api/people',(req,res)=>{
    const {id, name} = req.body//contenuto della richiesta post
    //const {body, tags} = req.body
    if(!id || !name){
    //if(!body || !tags){//   ! diverso    || or
        return res
        .status(400)
        .json({success:false, msg:'non trovo un dato necessario'})
    }
        return res
        .status(200)
        .json({success:true, person: {id:id, name:name} })
})

//aggiungo e creo un nuovo dato e lo espongo a tutta la lista

app.post('/api/people/new',(req,res)=>{
    const {id, name} = req.body

    if(!id || !name){
            return res
            .status(400)
            .json({success:false, msg:'non trovo un dato necessario'})
        }
            return res
            .status(201)
            .json({success:true, data: [...people, {id:id, name:name}]})
    })




//METODO POST CON DATO RICEVUTO DA FORM
app.post('/login',(req,res)=>{
    const {name} = req.body

    if(name){
        return res
        .status(200)
        .send(`Benvenuto/a ${name}`)
    }
})




//METODO HTTP PUT
//si lavora su un singolo oggetto PUT MODIFICA E AGGIORNA UN SINGOLO ELEMENTO
app.put('/api/people/:id',(req,res)=>{
    const{id} = req.params
    const {name} = req.body//raccogliere ciò che voglio modificare
    

    const person = people.find((person) => person.id === Number (id))
 
 
    //person = utente secondo il suo id   
    if(!person){
        return res
        .status(400)
        .json({success:false, msg:`non c'è nessuno con id: ${id}`})
    }
    const newPeople = people.map((person)=>{
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
        res.status(200).json({success:true, data:newPeople})
})

/*nel put prendono un dato, lo modificano, 
lanciano il nuovo dato e lo aggiornano..
quindi sono due livelli*/






//DELETE => cancella l'elemento intero compreso id
app.delete('/api/people/:id',(req,res)=>{
    const person = people.find((person)=> person.id === Number (req.params.id))

    if(!person){
        return res
        .status(400)
        .json({success:false, msg: `non c'è nessuno con id ${req.params.id}`})
    }
//escludo dal nuovo elenco l'elemento che nn mi interessa
    const newPeople = people.filter((person)=> person.id !== Number (req.params.id))
        return res
        .status(200)
        .json({success:true, data:newPeople})


})




app.listen(PORT,(req, res)=>{
    console.log(`Server in ascolto sulla porta ${PORT}`)
})




/* Fare 
const{id} = req.params
const person = people.find((person) => person.id === Number (id))


o fare 
const person = people.find((person)=> person.id === Number (req.params.id))

è la stessa cosa*/


//npm i express
//npm i nodemon --save-dev

