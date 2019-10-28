var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile')

var myBD = __dirname + "/../cancoes.json"
console.log(myBD)

/* GET home page. */
router.get('/', function(req, res, next) {
  jsonfile.readFile(myBD, (erro, cancoes) => {
    if(!erro){
      res.render('index', {lista: cancoes})
    }
    else{
      res.render('error', {error: erro})
    }
  })
})

router.get('/adicionar', function(req, res, next) {
      res.render('form', {})
})

router.get('/cancao:id',function(req,res,next){
  var id = req.params.id
  jsonfile.readFile(myBD, (erro, cancoes) => {
    if(!erro){
      var index = cancoes.findIndex(a => a.id==id )
      if(index > -1){
       var c = cancoes[index] 
       res.render('cancao',{cancao : c})
        
       }
       else
       console.log('Index =-1')     
    }
    else
    console.log('NAO LEU A BD')
  })
})


router.get('/editar:id', function(req, res, next) {
  var id = req.params.id
  console.log(id)
  jsonfile.readFile(myBD, (erro, cancoes) => {
    if(!erro){
      var index = cancoes.findIndex(a => a.id==id )
      if(index > -1){
       var c = cancoes[index] 
       res.render('editar',{cancao : c})
        
       }
       else
       console.log('Index =-1')     
    }
    else
    console.log('NAO LEU A BD')
  })
})




router.post('/', function(req, res) {
  jsonfile.readFile(myBD, (erro, cancoes)=>{
    if(!erro){
      cancoes.push(req.body)
      jsonfile.writeFile(myBD, cancoes, erro => {
        if(erro) console.log(erro)
        else console.log('Registo gravado com sucesso.')
      })
    }
  })
  res.redirect('/')
})

router.post('/editar:id', function(req, res) {
  var id = req.params.id
  console.log(id)
  jsonfile.readFile(myBD, (erro, cancoes) => {
    if(!erro){
      var index = cancoes.findIndex(a => a.id==id )
      if(index > -1){
      cancoes[index].prov=req.body.prov
      cancoes[index].local=req.body.local
      cancoes[index].tit=req.body.tit
      cancoes[index].musico=req.body.musico
      cancoes[index].file.t=req.body.file
      cancoes[index].duracao=req.body.duracao
      jsonfile.writeFile(myBD, cancoes, erro => {
        if(erro) console.log(erro)
        else console.log('Registo gravado com sucesso.')
      })
    }
  }
  })
  res.redirect('/cancao'+id)
})



router.delete('/:id',function(req,res){
var id = req.params.id
console.log("CHEGO AQUI")
jsonfile.readFile(myBD, (erro, cancoes)=>{
    if(!erro){
        console.log("CHEGO AQUI")
        var index = cancoes.findIndex(a => a.id==id )
        if(index > -1){
            console.log("CHEGO AQUI2 ")
            cancoes.splice(index, 1)
            jsonfile.writeFile(myBD, cancoes, erro =>{
                if(erro) console.log(erro)
                else console.log("BD atualizada com sucesso eheh")
            })
            res.end('0')
        }
        else{
            console.log('Erro: não consegui encontrar o elemento a remover... :(')
            res.end('1')
        }
    }
    else{
        console.log("Erro na leitura da BD... :(")
        res.end('1')
    }
})
//res.redirect('/')
})


module.exports = router
