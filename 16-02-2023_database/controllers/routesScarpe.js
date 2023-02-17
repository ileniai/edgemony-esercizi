const express = require('express');
let routerScarpe = express.Router();

const mongoose = require('mongoose');                 
const Articoli = mongoose.model('scarpeModel');


routerScarpe.get('/', (req, res) => {
    res.render("addupscarpe", {
        viewTitle: "Inserisci un articolo"
    });
});

routerScarpe.post('/scarpe', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
    else
        updateRecord(req, res);
});

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