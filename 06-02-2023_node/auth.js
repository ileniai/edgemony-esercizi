const authorize = (req, res, next)=>{
const {user} = req.query



if(user === 'Ilenia'){
    req.user = {name: 'Ilenia'}
    next()
}else{
    res.status(401).send('Non sei autorizzato')
}

}

module.exports = authorize


