const express = require('express');
let routerScarpe = express.Router();

const scarpeModel = require('../models/articoli')

const mongoose = require('mongoose');                 
const Articoli = mongoose.model('scarpeModel');



routerScarpe.get('/', (req, res) => {
    res.render("addupscarpe", {
        viewTitle: "Inserisci un articolo"
    });
});


routerScarpe.get('/', async(req,res)=>{
    try{
        const spm = await scarpeModel.find()
        res.json(spm)
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

routerScarpe.get('/:id', getSpm, (req,res)=>{
    res.json(res.spm)
})



routerScarpe.post('/scarpe', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
    else
        updateRecord(req, res);
});

routerScarpe.post('/', async(req,res)=>{
    const spm = new scarpeModel({
        name: req.body.name,
        channel: req.body.channel
    })
    try{
        const newSpm = await spm.save()
        res.status(201).json(newSpm)
    }catch(err){
        res.status(400).json({message: err.message})
    }
})


routerScarpe.put('/:id', getSpm, async (req, res)=>{
    if(req.body.name != null){
        res.spm.name = req.body.name
    }
    if(req.body.channel != null){
        res.spm.channel = req.body.channel
    }
    try{
        const spmUpDate = await res.spm.save()
        res.json(spmUpDate)
    }catch(err){
        res.status(400).json({message: err.message})
    }
})


async function getSpm(req, res, next){
    let spm
    try{
        spm = await scarpeModel.findById(req.params.id)
        if(spm == null){
            return res.status(404).json({message:"Utente non trovato"})
        }
    }catch(err){
        return res.status(500).json({message: err.message})
    }
    res.spm = spm
    next()
}



function insertRecord(req, res) {
    
    let articoli = new Articoli();
    articoli.model = req.body.model;
    console.log(req.body.model)
    articoli.brand = req.body.brand;
    articoli.number = req.body.number;
    articoli.price = req.body.price;
    articoli.utils = req.body.utils;
    articoli.color = req.body.color;
    articoli.category = req.body.category;
    console.log(req.body.category)
    articoli.save((err, doc) => {
    
        if (!err)
            res.redirect('/addupscarpe');
            else
                console.log(`Errore nell' inserimento: ${err}`);
        })
    }; 


function updateRecord(req, res) {
    Articoli.updateOne({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('addupscarpe'); }
            else {
                console.log('Errore durante l\' update : ' + err);
        }
    });
}

routerScarpe.get('/scarpeList', (req, res) => {
    Articoli.find((err, docs) => {
        if (!err) {
            res.render("addupscarpe", {
                articoliscarpe: docs
            });
        }
        else {
            console.log(`Errore ${err}`);
        }
    });
});


routerScarpe.get('/scarpe/:id', (req, res) => {
    Articoli.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("addupscarpe", {
                viewTitle: "Aggiornamento",
                nota: doc
            });
        }
    });
});

routerScarpe.get('/scarpe/delete/:id', (req, res) => {
    Articoli.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/addupscarpe');
        }
        else {
            console.log(`Errore ${err}`);
        }
    });
});

module.exports = routerScarpe;