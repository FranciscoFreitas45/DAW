var express = require('express');
var router = express.Router();
var axios=require('axios')

const KEY = '&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzM0ODgwMDgsImV4cCI6MTU3NjA4MDAwOH0.UD0UdMrzKcWDop8HlwqdeOuK_ZzZxHvOMOP2DMkIjUQ'
/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('http://clav-api.dglab.gov.pt/api/entidades?processos=com'+KEY)
  .then(dados => {
    res.render('index',{ lista:dados.data });
  })
  .catch(erro => {
    res.render('error',{error:erro})
  })
});

router.get('/:id', function(req, res, next) {
  axios.get('http://clav-api.dglab.gov.pt/api/entidades/'+req.params.id+'?' + KEY)
  .then(dados => {
    var entidade= dados.data
    axios.get('http://clav-api.dglab.gov.pt/api/entidades/'+req.params.id+'/tipologias?'+KEY)
    .then(tipologias =>{
      entidade.tipologias=tipologias.data
      axios.get('http://clav-api.dglab.gov.pt/api/entidades/'+req.params.id+'/intervencao/dono?'+KEY)
      .then(dono => {
        entidade.dono= dono.data
        axios('http://clav-api.dglab.gov.pt/api/entidades/'+req.params.id+'/intervencao/participante?'+KEY)  
        .then(participante => {
          entidade.participante=participante.data
          res.render('entidade',{ ent:entidade });
        })
      })
    })
   
  })
  .catch(erro => {
    res.render('error',{error:erro})
  })
});


module.exports = router;
