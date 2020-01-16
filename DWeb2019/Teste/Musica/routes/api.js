var express = require('express');
var router = express.Router();
var Musica = require('../controllers/musicas')



/* GET home page. */
router.get('/obras', function(req, res, next) {
    var compositor =  req.query.compositor
    var instrumento = req.query.instrumento
    if(compositor){
        Musica.filtrarCompositor(compositor)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    }
    else if(instrumento){
        Musica.filtrarInstrumento(instrumento)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))

    }
    else{
    Musica.listar()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    }
    });

router.get('/obras/:id', function(req, res, next) {
    Musica.consultar(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

router.get('/tipos', function(req, res, next) {
    Musica.listaTipos()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

router.get('/obrasQuant', function(req, res, next) {
    Musica.listaObras()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});





module.exports = router;
