var express = require('express');
var router = express.Router();

var Nobels = require('../controllers/prizes')


router.get('/premios', function(req, res, next) {
    var categoria = req.query.categoria
    var ano = req.query.data
    if(categoria && ano){
        Nobels.listaPremiosCategoriaAno(categoria,ano)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    }
        
    else if(categoria){
        Nobels.listaPremiosCategoria(categoria)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    }
    else {    
    Nobels.listar()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    }
});


router.get('/premios/:id', function(req, res, next) {
    Nobels.consultar(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});



router.get('/categorias', function(req, res, next) {
    Nobels.categorias()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});


router.get('/laureados', function(req, res, next) {
    Nobels.listaLaureados()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});





module.exports = router;
