const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskUnidad = Schema({
    ClaveAsignatura: String,
    NumUnidad: String,
    NombreUnidad:String,
    HorasUnidad:Number,
    HorasSemana:Number
  });

module.exports = mongoose.model('unidadAsig', TaskUnidad);