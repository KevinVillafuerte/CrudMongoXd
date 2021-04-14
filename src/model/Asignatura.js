const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskAsignatura = Schema({
    ClaveAsignatura: String,
    NombreAsignatura: String,
    Cuatrimestre:String,
    ClaveCarrera:String,

  });

module.exports = mongoose.model('asignatura', TaskAsignatura);