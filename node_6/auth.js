//funzione che mi permette di autorizzare un utente e l'altro no
const authorize = (req, res, next)=>{
const {user} = req.query



if(user === 'Ilenia'){
    req.user = {name: 'Ilenia'}//utente autorizzato(condizione)
    next()
}else{
    res.status(401).send('Non sei autorizzato')
}

}

module.exports = authorize


//http://localhost:3000/api/products?user=Ilenia