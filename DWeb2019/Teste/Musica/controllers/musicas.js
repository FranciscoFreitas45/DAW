var Musica = require('../models/musica')

module.exports.listar = () =>{
    return Musica
            .find({},{id:1,titulo:1,tipo:1,compositor:1,_id:0})
            .exec()
}

module.exports.consultar = id =>{
    return Musica
            .find({id: id})
            .exec()
}


module.exports.listaTipos = () =>{
    return Musica
            .distinct('tipo')
            .exec()
}


module.exports.filtrarCompositor = comp=>{
    return Musica
            .find({compositor: comp})
            .exec()
}

module.exports.filtrarInstrumento = inst =>{
    return Musica
            .find({instrumentos : {$elemMatch: {designacao: inst}}})
            .exec()
}



module.exports.listaObras = () =>{
    return Musica
    .aggregate([
        {
           $project: {
              id:1,
              titulo:1,
              _id:0,
              numeroPartituras: { $cond: { if: { $isArray: "$instrumentos.partituras" }, then: { $size: "$instrumentos" }, else: "0"} }
           }
        }
     ] )
    }
     