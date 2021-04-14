const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskCalificacion = Schema({
    NombreCarrera: String,  
    Nombre: String,
    NombreAsignatura: String,
    NumUnidad:String,
    CalifOrdinaria:String,
    R1:String,
    R2:String,
    Global:String,
  });

module.exports = mongoose.model('calificaciones', TaskCalificacion);