var express = require('express');
var router = express.Router();

var Obras = require('../controllers/obras')

/* GET home page. */
router.get('/', function(req, res, next) {
  var ano = req.query.ano
  var compositor= req.query.compositor
  var duracao= req.query.duracao
  var periodo= req.query.periodo
  if(ano){
    Obras.consultarPorAno(ano)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  }
  else if(compositor && duracao){
    Obras.listaObrasCompositorDuracao(compositor,duracao)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  }
  else if (periodo){
  Obras.listaPeriodo(periodo)
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
  }
  else {
  Obras.listar()
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
  }
});


router.get('/compositores', function(req, res, next) {
  Obras.listaCompositores()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
});
router.get('/periodos', function(req, res, next) {
  Obras.listaPeriodos()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
});



router.get('/:id', function(req, res, next) {
  Obras.consultarPorId(req.params.id)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
});



module.exports = router;
