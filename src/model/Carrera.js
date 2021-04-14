const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskCarrera = Schema({
    ClaveCarrera: String,
    NombreCarrera: String,
  });

module.exports = mongoose.model('carrera', TaskCarrera);