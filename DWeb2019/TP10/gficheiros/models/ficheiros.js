const mongoose = require('mongoose')

var ficheiroSchema = new mongoose.Schema({
    data: String, //se quisessemos que o campo fosse obrigatório acrescentavamos "require:true"
    desc: String,
    name: String,
    mimetype: String,
    size: Number
})

module.exports = mongoose.model('ficheiro', ficheiroSchema)