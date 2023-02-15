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
    dbase.createCollection('students', (err, res)=>{
if(err) throw err
    console.log('Collezione creata')
    db.close()

    })
})

MongoClient.connect(url, (err, db)=>{

if(err) throw err
    let dbase = db.db('school') 
    dbase.createCollection('students', (err, res)=>{
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
        {nome: 'Mario', cognome:'Rossi', matricola:'10', corso:'informatica', esame:'html'},
        {nome: 'Carla', cognome:'Primo', matricola:'23', corso:'informatica', esame:'css'},
        {nome: 'Aurora', cognome:'Fober', matricola:'40', corso:'informatica', esame:'javascript'},
        {nome: 'Mattia', cognome:'Bianchi', matricola:'55', corso:'informatica', esame:'node'},
        {nome: 'Fabio', cognome:'Morelli', matricola:'63', corso:'informatica', esame:'react'}
    ]

dbase.collection('students').insertMany(myObj,(err, res)=>{
    if(err) throw err
    console.log(`Numero di record inseriti: ${res.insertedCount}`)
    db.close();
})

})

            //SELEZIONO UN SOLO DATO

MongoClient.connect(url, (err, db)=>{
    if(err) throw err
    let dbase = db.db('school')

    dbase.collection('students').findOne({},(err, res)=>{
        if(err) throw err
        console.log(res.nome)
        db.close();
    })
})

            //SELEZIONO TUTTI I DATI

MongoClient.connect(url, (err, db)=> {
    if(err) throw err
    let dbase = db.db('school')

    dbase.collection('students').find({}).toArray(function (err, res) {
        if(err) throw err;
        console.log(res)
        db.close();
    })
})

            //SELEZIONO DATO CON FILTRO

MongoClient.connect(url, (err,  db)=> {
    if(err) throw err
    let dbase = db.db('school')
    let query = {matricola:'40'}
    dbase.collection('students').find(query).toArray(function (err, res) {
        if(err) throw err;
        console.log(res)
        db.close();
    })
})

            //MODIFICO DATO

MongoClient.connect(url, (err, db)=> {
    if(err) throw err
    let dbase = db.db('school')
    let query = {nome:'Fabio'}
    let newValue = {$set:{matricola:800, cognome:'Pippo'}}
    dbase.collection('students').updateOne(query, newValue, function (err, res){
        if(err) throw err;
        console.log('record(s) aggiornati')
        db.close();
    })
})

            //ELIMINO DATO

MongoClient.connect(url, (err, db)=> {
    if(err) throw err
    let dbase = db.db('school')

    let query = {nome:'Fabio'}
    dbase.collection('students').deleteOne(query, (err, obj)=>{
        if(err) throw err;
        console.log(`${obj.result} record cancellato`)
        db.close();
    })
})