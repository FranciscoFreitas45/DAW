var jsonfile = require('jsonfile')
var mongoose = require('mongoose')


function importMongo (baseDados,collection,ficheiro){
    mongoose.connect('mongodb://127.0.0.1:27017/'+baseDados, {useNewUrlParser: true ,useUnifiedTopology: true })
        .then (()=>{
            jsonfile.readFile(ficheiro, (erro, dados)=>{
                if(erro){
                    console.log("ERRO AO LER O FICHEIRO")
                    return;
                }
                else{
                    var novoSchema = mongoose.Schema({},{strict:false, collection : collection})
                    var novoModel = mongoose.model(collection, novoSchema)
                    var novo = new novoModel(dados)
                    novo.save()
                    .then(() => {
                        console.log("Successo")
                        mongoose.connection.close()})
                    .catch(error => console.log('erro'))
        }

        
        })
    })
    .catch(()=> console.log('erro')) 
}

function main(){
var argc = process.argv.length
    if(argc < 5)  console.log("Faltam argumentos");
    else  importMongo(process.argv[2],process.argv[3],process.argv[4])

}

main()
