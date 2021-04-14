const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskUsuario = Schema({
    matriculaAlum: Number,
    Nombre: String,
    ApePaterno:String,
    ApeMaterno:String,
    telefono:String,
    Email:String,
    Direccion:String,
    CuatrimestreAct:String,
    NombreCarrera:String,
  });

module.exports = mongoose.model('alumno', TaskUsuario);
