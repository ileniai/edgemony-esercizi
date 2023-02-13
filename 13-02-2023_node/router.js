const express = require ('express')
const hbs = require('hbs')
const session = require('cookie-session')
const bodyParser = require('body-parser')
const router = express.Router()

router.use(express.static('./public'))
router.use(bodyParser.urlencoded({extended:true}))
router.use(session({secret:'La mia sessione'}))

//creo le rotte
router.get('/',(req,res)=>{
    res.render('index',{
        titolo:'Home'
    })
})

router.get('/about',(req,res)=>{
    res.render('about',{
        titolo:'About page'
    })
})

router.get('/contatti',(req,res)=>{
    res.render('contatti',{
        titolo:'contatti'
    })
})

router.get('/formazione',(req,res)=>{
    res.render('formazione',{
        titolo:'formazione'
    })
})


router.get('/web-design',(req,res)=>{
    res.render('web-design',{
        titolo:'web-design'
    })
})

router.get('/signup',(req,res)=>{
    res.render('signup')
})

router.post('/signup',(req,res)=>{
    console.log(`${req.body.name} / ${req.body.password} / ${req.body.email} `)
   
    if(!req.body.name || !req.body.password || !req.body.email){
        res.status(400)
        res.render('signup', {message:'per favore aggiungi tutti i dati richiesti'})
    }else{
        let name = 'Ilenia'
        let password = '12345' 
        let email = 'ilenia1@hoho.it'
        let userAuth = {name:name, password:password, email:email} 
    
    
    if(name == req.body.name && password == req.body.password && req.body.email){
        req.session.user = userAuth
        res.redirect('/private')       
    }else{
        res.redirect('/warning')

    }
    }
})


function checkPage(req,res, next){
    if(req.session.user){
        next()
    }else{
        res.redirect('/warning')
    }
}
router.get('/private', checkPage, (req,res)=>{
    res.render('private')
})



router.get('/warning',(req,res)=>{
    res.render('warning')
})

router.get('/logout',(req,res)=>{
    console.log('Hai fato logout')
    req.session = null
    res.redirect('/signup')
})


/*router.get('/*',(req,re)=>{
    res.render('404')
})*/

module.exports = router
