const MongoClient = require('mongodb').MongoClient
let url ='mongodb+srv://ileniai:Edgemony2023@cluster0.dluvbwt.mongodb.net/school?retryWrites=true'

            //MI CONNETTO AL MIO DATABASE

MongoClient.connect(url) 
    .then((db)=>{ 
        accountDb = db
        collection = accountDb.db('school')
        console.log('database connesso')
    })
    .catch((err)=>{
        console.log(err)
    })

            //CREARE UNA NUOVA COLLEZIONE

MongoClient.connect(url, (err, db)=>{

if(err) throw err
    let dbase = db.db('school') 
    dbase.createCollection('courses', (err, res)=>{
if(err) throw err
    console.log('Collezione creata')
    db.close()

    })
})

MongoClient.connect(url, (err, db)=>{

if(err) throw err
    let dbase = db.db('school') 
    dbase.createCollection('courses', (err, res)=>{
if(err) throw err
    console.log('Collezione creata')
    db.close()

    })
})

            //INSERISCO PIU' CAMPI

MongoClient.connect (url, (err, db)=>{
    if(err) throw err
    let dbase = db.db('school')

    let myObj = [
        {corso: 'Lingue', materia:'Inglese', docenti:'Franchini'},
        {corso: 'Economia', materia:'Marketing', docenti:'Paoli'},
        {corso: 'Ed.Fisica', materia:'Atletica', docenti:'Rampollo'},
        {corso: 'Edgemony', materia:'Node', docenti:'Ricci'},
        {corso: 'Medicina', materia:'Organi', docenti:'Sampiero'}
    ]

dbase.collection('courses').insertMany(myObj,(err, res)=>{
    if(err) throw err
    console.log(`Numero di record inseriti: ${res.insertedCount}`)
    db.close();
})

})

            //SELEZIONO UN SOLO DATO

MongoClient.connect(url, (err, db)=>{
    if(err) throw err
    let dbase = db.db('school')

    dbase.collection('courses').findOne({},(err, res)=>{
        if(err) throw err
        console.log(res.corso)
        db.close();
    })
})

            //SELEZIONO TUTTI I DATI

MongoClient.connect(url, (err, db)=> {
    if(err) throw err
    let dbase = db.db('school')

    dbase.collection('courses').find({}).toArray(function (err, res) {
        if(err) throw err;
        console.log(res)
        db.close();
    })
})

            //SELEZIONO DATO CON FILTRO

MongoClient.connect(url, (err,  db)=> {
    if(err) throw err
    let dbase = db.db('school')
    let query = {materia:'Node'}
    dbase.collection('courses').find(query).toArray(function (err, res) {
        if(err) throw err;
        console.log(res)
        db.close();
    })
})

            //MODIFICO DATO

MongoClient.connect(url, (err, db)=> {
    if(err) throw err
    let dbase = db.db('school')
    let query = {corso:'Ed.Fisica'}
    let newValue = {$set:{docenti:'Wilson', materia:'Basket'}}
    dbase.collection('courses').updateOne(query, newValue, function (err, res){
        if(err) throw err;
        console.log('record(s) aggiornati')
        db.close();
    })
})

            //ELIMINO DATO

MongoClient.connect(url, (err, db)=> {
    if(err) throw err
    let dbase = db.db('school')

    let query = {corso:'Medicina'}
    dbase.collection('courses').deleteOne(query, (err, obj)=>{
        if(err) throw err;
        console.log(`${obj.result} record cancellato`)
        db.close();
    })
})