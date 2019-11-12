var  Obra = require('../models/obras')

// Devolve a lista de obras
module.exports.listar = () => {
    return Obra
        .find()
        .exec()
}

//Devolver as obras de um determinado ano 
module.exports.consultarPorAno = ano => {
    return Obra
        .find({anoCriacao: ano })
        .exec()
}

// devolve a lista de obras que tenham o campo "compositor" com o valor "YYY" e o campo "duracao" com um valor superior a "AAAA";
module.exports.listaObrasCompositorDuracao = (comp,dur) => {
    return Obra
        .find({compositor: comp, duracao: {$gte:dur} })
        .exec()
}



//Devolve a lista de categorias, sem repetições;
module.exports.listaPeriodo = per => {
    return Obra 
        .find({periodo: per })
        .exec()
}

//Devolver uma obra 
module.exports.consultarPorId = fid => {
    return Obra
        .findOne({_id: fid })
        
}

module.exports.listaCompositores = () => {
    return Obra.distinct('compositor').exec()
        
}


module.exports.listaPeriodos = () => {
    return Obra.distinct('periodo').exec()
        
}










