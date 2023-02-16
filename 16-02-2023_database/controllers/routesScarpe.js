const express = require('express');
let router = express.Router();

const mongoose = require('mongoose');                 
const Articoli = mongoose.model('scarpeModel');


router.get('/scarpe', (req, res) => {
    res.render("update", {
        viewTitle: "Inserisci una nota"
    });
});

router.post('/scarpe', (req, res) => {
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
            res.redirect('scarpe');
            else
                console.log(`Errore nell' inserimento: ${err}`);
        })
    }; 


function updateRecord(req, res) {
    Articoli.updateOne({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('scarpe'); }
            else {
                console.log('Errore durante l\' update : ' + err);
        }
    });
}

router.get('/scarpe/list', (req, res) => {
    Articoli.find((err, docs) => {
        if (!err) {
            res.render("scarpe", {
                articoliscarpe: docs
            });
        }
        else {
            console.log(`Errore ${err}`);
        }
    });
});


router.get('/scarpe/:id', (req, res) => {
    Articoli.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("update", {
                viewTitle: "Aggiornamento",
                nota: doc
            });
        }
    });
});

router.get('/scarpe/delete/:id', (req, res) => {
    Articoli.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/scarpe');
        }
        else {
            console.log(`Errore ${err}`);
        }
    });
});

module.exports = router;