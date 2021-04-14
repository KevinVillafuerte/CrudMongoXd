const express = require('express');
const router = express.Router();

const Task = require('../model/Alumno');//Tabla alumno
const Task2 = require('../model/Asignatura');//Tabla Asignatura
const Task3 = require('../model/Calificacion');//Tabla Calificasiones
const Task4 = require('../model/Carrera');//Tabla Carrera
const Task5 = require('../model/UnidaAsig');//Tabla Unidad_Asignada

// Listar los datos para mostrar en la tabla
router.get('/tabla', async (req, res) => {
  const tasks = await Task.find();
  const tasks13 = await Task4.find();
  res.render('tabla', {
    tasks, tasks13
  });
});

//Invocar la vista para la incercion de datos
router.get('/insert',async (req, res) => {
  const tasks = await Task.find();
  const tasks13 = await Task4.find();
  res.render('index', {
    tasks, tasks13
  });
});
// Envia los datos de la insercion a la base de datos
router.post('/add', async (req, res, next) => {
  const task = new Task(req.body);
  await task.save();
  res.redirect('/tabla');
});
// Manda a la vista de edicion por medio del id
router.get('/edit/:id', async (req, res, next) => {
  const task = await Task.findById(req.params.id);
  console.log(task)
  res.render('edit', { task });
});
// Mandar los datos a la tabla para editarlos
router.post('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  await Task.update({ _id: id }, req.body);
  res.redirect('/tabla');
});

//Eliminar un usuario en la base de datos
router.get('/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await Task.remove({ _id: id });
  res.redirect('/tabla');
});

//Metodos para la tabla carrera////////////////////////////////////////////////////

router.get('/tablac', async (req, res) => {
  const tasks = await Task4.find();
  res.render('tablac', {
    tasks
  });
});

//Invocar la vista para la incercion de datos
router.get('/tablac', (req, res) => {
  res.render('index', {
  })
});
// Envia los datos de la insercion a la base de datos
router.post('/addc', async (req, res, next) => {
  const task = new Task4(req.body);
  await task.save();
  res.redirect('/tablac');
});
// Manda a la vista de edicion por medio del id
router.get('/editc/:id', async (req, res, next) => {
  const task = await Task4.findById(req.params.id);
  console.log(task)
  res.render('editc', { task });
});
// Mandar los datos a la tabla para editarlos
router.post('/editc/:id', async (req, res, next) => {
  const { id } = req.params;
  await Task4.update({ _id: id }, req.body);
  res.redirect('/tablac');
});

//Eliminar un usuario en la base de datos
router.get('/deletec/:id', async (req, res, next) => {
  let { id } = req.params;
  await Task4.remove({ _id: id });
  res.redirect('/tablac');
});

//Metodos para la tabla Asignatura///////////////////////////////////

router.get('/tablaa', async (req, res) => {
  const tasks = await Task2.find();
  const tasks11 = await Task4.find();// uso tabla carrera
  res.render('tablaa', {
    tasks, tasks11
  });
});

//Invocar la vista para la incercion de datos
router.get('/tablaa', (req, res) => {
  res.render('index', {
  })
});
// Envia los datos de la insercion a la base de datos
router.post('/adda', async (req, res, next) => {
  const task = new Task2(req.body);
  await task.save();
  res.redirect('/tablaa');
});
// Manda a la vista de edicion por medio del id
router.get('/edita/:id', async (req, res, next) => {
  const task = await Task2.findById(req.params.id);
  console.log(task)
  res.render('edita', { task });
});
// Mandar los datos a la tabla para editarlos
router.post('/edita/:id', async (req, res, next) => {
  const { id } = req.params;
  await Task2.update({ _id: id }, req.body);
  res.redirect('/tablaa');
});

//Eliminar un usuario en la base de datos
router.get('/deletea/:id', async (req, res, next) => {
  let { id } = req.params;
  await Task2.remove({ _id: id });
  res.redirect('/tablaa');
});

//Metodos para la tabla Unidad Asignada///////////////////////////////////

router.get('/tablau', async (req, res) => {
  const tasks = await Task5.find();
  const tasks12 = await Task2.find();//uso carrera
  res.render('tablau', {
    tasks,tasks12
  });
});

//Invocar la vista para la incercion de datos
router.get('/tablau', (req, res) => {
  res.render('index', {
  })
});
// Envia los datos de la insercion a la base de datos
router.post('/addu', async (req, res, next) => {
  const task = new Task5(req.body);
  await task.save();
  res.redirect('/tablau');
});
// Manda a la vista de edicion por medio del id
router.get('/editu/:id', async (req, res, next) => {
  const task = await Task5.findById(req.params.id);
  console.log(task)
  res.render('edita', { task });
});
// Mandar los datos a la tabla para editarlos
router.post('/editu/:id', async (req, res, next) => {
  const { id } = req.params;
  await Task5.update({ _id: id }, req.body);
  res.redirect('/tablau');
});

//Eliminar un usuario en la base de datos
router.get('/deleteu/:id', async (req, res, next) => {
  let { id } = req.params;
  await Task5.remove({ _id: id });
  res.redirect('/tablau');
});

//Metodos para la tabla Calificacion//////////////////////////////////

router.get('/tablaca', async (req, res) => {
  const tasks = await Task3.find();
  const tasks16 = await Task.find();
  const tasks14 = await Task2.find();
  const tasks15 = await Task5.find();
  const tasks17 = await Task4.find(); 
  res.render('tablaca', {
    tasks,tasks16, tasks14, tasks15,tasks17
  });
});

//Invocar la vista para la incercion de datos
router.get('/tablaca', (req, res) => {
  res.render('index', {
  });
});
// Envia los datos de la insercion a la base de datos
router.post('/addca', async (req, res, next) => {
  const task = new Task3(req.body);
  await task.save();
  res.redirect('/tablaca');
});
// Manda a la vista de edicion por medio del id
router.get('/editca/:id', async (req, res, next) => {
  const task = await Task3.findById(req.params.id);
  console.log(task)
  res.render('editca', { task });
});
// Mandar los datos a la tabla para editarlos
router.post('/editca/:id', async (req, res, next) => {
  const { id } = req.params;
  await Task3.update({ _id: id }, req.body);
  res.redirect('/tablaca');
});

//Eliminar un usuario en la base de datos
router.get('/deleteca/:id', async (req, res, next) => {
  let { id } = req.params;
  await Task3.remove({ _id: id });
  res.redirect('/tablaca');
});

module.exports = router;
