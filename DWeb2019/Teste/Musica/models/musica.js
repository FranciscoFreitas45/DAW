const mongoose = require('mongoose')



var instrumentoSchema = new mongoose.Schema({
  designacao:String,
  partitura: {
    path : String,
    voz : String
  }
})


var musicaSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id:String,
    titulo:String,
    tipo:String,
    compositor:String,
    instrumentos: [instrumentoSchema]
  });





module.exports = mongoose.model('musica', musicaSchema);