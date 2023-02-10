const express = require ('express')
const router = express.Router()

router.use(express.static('./public'))


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

module.exports = router
