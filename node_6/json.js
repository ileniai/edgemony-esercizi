const express = require('express')
const {products} = require('./data')

const app = express()
const PORT = 5000

app.get('/json', (req, res)=>{
    res.json(products)
})

app.get('/', (req,res)=>{
    res.send('<h1>Sei nella Home Page</h1><a href="/json">Vai alla pagina prodotti</a>')
})


//recupera solo alcuni elementi degli oggetti json http://localhost:5000/api/products
app.get('/api/products', (req, res)=>{
    const newProduct = products.map((product) =>{
        const {id, title, brand} = product
        return {id, title, brand}
    })
    res.json(newProduct)
})


//  /api/products/3 
app.get('/api/products/:productId', (req, res)=>{
    console.log(req.params)
    const {productId} = req.params
    
    //find confronta all'interno dell'arrey se quell'oggetto esiste o meno
    const singleProduct = products.find(
        //con number gestisco il numero di dati
        (product)=> product.id === Number(productId)
    )
// ! rende negativa la condizione
    if(!singleProduct){
        return res.status(404).send('Articolo inesistente')
    }
    return res.json(singleProduct)
})

//dimostrazione del percorso che è esattamente riconosciuto negli elementi impostati
app.get('/api/products/:productId/:comments/:commentsId',(req, res)=>{
    console.log(req.params)
    res.send('che bell\'oggetto')
    //http://localhost:5000/api/products/4/commento/off
})

//impostazione del percorso dell'end point della mia api
//api = apiv1/query?serch=i&limit=1
app.get('/api/v1/query', (req,res)=>{
    console.log(req.query)
    const {search, limit} = req.query//cerco e do un limite alla ricerca
    let filterProduct = [...products]

    if(search){
        filterProduct = filterProduct.filter((product)=>{
            return product.title.startsWith(search)//startWith che comincia con
        })
    }
    res.status(200).json(filterProduct)
}) //http://localhost:5000/api/v1/query?search=S


app.listen(PORT,()=>{
    console.log(`Server ascolta sulla porta ${PORT}`)
})

//non esiste in qesto caso un percorso che gestisce due parametri...o uno o tre paramentri