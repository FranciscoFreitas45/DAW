var jsonfile = require('jsonfile')
var nanoid = require('nanoid')

var myDB ="cancoes.json"


function adicionarNanoID(){
    jsonfile.readFile(myDB,(erro,cancoes)=>{
        if(!erro){
            cancoes.forEach(c=>c.id=nanoid())
            jsonfile.writeFile(myDB,cancoes,erro => {
                if(erro){
                    console.log("CAI AQUI" +erro)
                }
                else
                    console.log("Registo gravado com sucesso")
                

            })
        }
        else
        console.log("ERRO DE LEITURA")
    
    })
}

adicionarNanoID()