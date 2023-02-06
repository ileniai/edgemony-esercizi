//richiamo delle letture di oggetti
const logger = (req, res, next)=>{
    const method = req.method //indica il metodo di http
    const url = req.url //mi da delle info riguardo il path
    const data = new Date().getFullYear()

console.log(method, url, data)



    next()
}


//metto i processi di importazione con una funzione
module.exports = logger 